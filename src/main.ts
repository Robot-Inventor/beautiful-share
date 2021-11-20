const get_url = () => {
    const ogp_url_element = document.querySelector("meta[property='og:url']");

    if (ogp_url_element) return ogp_url_element.getAttribute("content") || location.href;
    else return location.href;
};

const get_site_name = () => {
    const ogp_site_name_element = document.querySelector("meta[property='og:site_name']");

    if (ogp_site_name_element) return ogp_site_name_element.getAttribute("content");
    else return null;
};

const get_title = () => {
    const ogp_title_element = document.querySelector("meta[property='og:title']");

    if (!ogp_title_element) return document.title;

    const ogp_title = ogp_title_element.getAttribute("content");
    const site_name = get_site_name();

    if (ogp_title && site_name) {
        if (ogp_title.includes(site_name)) return ogp_title;
        else return `${ogp_title} - ${site_name}`;
    } else return ogp_title || document.title;
};

const get_twitter_site = () => {
    const twitter_site_element = document.querySelector("meta[name='twitter:site']");

    return twitter_site_element ? twitter_site_element.getAttribute("content") : null;
};

const main = () => {
    const twitter_site = get_twitter_site();

    const share_text = twitter_site
        ? `${get_title()}\n${get_url()} by ${twitter_site}`
        : `${get_title()}\n${get_url()}`;

    navigator.clipboard
        .writeText(share_text)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch((err) => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            alert(`Failed to copy to clipboard!\n\n${err}`);
        });
};

main();

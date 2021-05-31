/***
* Resources:
*   https://www.privacy-handbuch.de/handbuch_31p.htm
*   https://www.kuketz-blog.de/thunderbird-e-mailing-am-desktop-digitaler-schutzschild-teil4/
***/

/* Features */
user_pref("mailnews.headers.showSender", true); // Show SENDER header if set
user_pref("mailnews.headers.showUserAgent", true); // Show User-Agent of sender
user_pref("mailnews.start_page.enabled", false); // Disable start page which sets tracking cookies
user_pref("mail.showCondensedAddresses", false); // Show name plus address

/* Security */
user_pref("javascript.enabled", false); // Obvious
user_pref("gfx.downloadable_fonts.enabled", false); // Disable web fonts
user_pref("general.useragent.override", ""); // Null user-agent
user_pref("mail.inline_attachments", false); // Don't display attachments inline (security risk)
user_pref("beacon.enabled", false); // Disable Beacons
user_pref("media.hardware-video-decoding.enabled", false); // Disable Hardware Video decoding (video in a mail???)
user_pref("media.video_stats.enabled", false); // Disable video stats collecting
user_pref("network.IDN_show_punycode", true); // Show Punycode for domains (phishing)
user_pref("network.http.sendRefererHeader", 0); // Null Refer(r)er header
user_pref("network.http.referer.XOriginPolicy", 2); // Subdomains are treated as 3rd party sites
user_pref("security.family_safety.mode ", 0); // Disable Family Safety MitM
user_pref("privacy.firstparty.isolate", true); // Isolate all sites
user_pref("mail.smtpserver.default.hello_argument", "[127.0.0.1]"); // Disable leaking private IP to server
user_pref("mail.server.default.check_all_folders_for_new", true); // Check all folders for new messages
user_pref("security.tls.enable_0rtt_data", false); // Disable 0-roundtrip TLS ("SuperCooKey": https://www.privateinternetaccess.com/blog/supercookey-a-supercookie-built-into-tls-1-2-and-1-3/)

/* Telemetry */
user_pref("extensions.getAddons.cache.enabled", false); // Disable installed addons telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Disable telemetry

/* Annoyances */
user_pref("extensions.blocklist.enabled", false); // Disable addon blocklist (beware!)
user_pref("browser.safebrowsing.phishing.enabled", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.malware.enabled", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.enabled", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // Disable Google SafeBrowsing
user_pref("browser.safebrowsing.downloads.remote.url", ""); // Disable Google SafeBrowsing

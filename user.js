/***
* Resources:
*   https://privacy-handbuch.de/handbuch_21u.htm
*   https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
***/

/* Telemetry */
user_pref("app.normandy.api_url", ""); // Normandy
user_pref("app.normandy.enabled", false); // Normandy
user_pref("app.normandy.user_id", ""); // Normandy
user_pref("app.shield.optoutstudies.enabled", false); // Shield Studies
user_pref("breakpad.reportURL", ""); // Crash reports
user_pref("browser.aboutHomeSnippets.updateUrl", ""); // Snippets
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // Crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // Backlogged crash reports
user_pref("browser.discovery.enabled", false); // Extensions recommendations
user_pref("browser.newtabpage.enabled", false); // New Tab Page
user_pref("browser.newtab.preload", false); // Preload new tab page
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // Activity Stream
user_pref("browser.newtabpage.activity-stream.telemetry", false); // Activity Stream
user_pref("browser.pagethumbnails.capturing_disabled", true); // Activity Stream
user_pref("browser.ping-centre.telemetry", false); // Ping Centre: https://github.com/mozilla/ping-centre
user_pref("browser.region.update.enabled", false); // Geo-Tracking
user_pref("browser.region.network.url", ""); // Geo-Tracking
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // Safe browsing blocklist download
user_pref("browser.safebrowsing.downloads.remote.url", ""); // Safe browsing URL
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // Safe browsing
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // Safe browsing
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", ""); // Safe browsing
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // Safe browsing
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // Safe browsing
user_pref("browser.safebrowsing.provider.mozilla.updateURL", ""); // Safe browsing
user_pref("browser.search.geoSpecificDefaults", false); // Geo-Tracking
user_pref("browser.startup.homepage_override.mstone", "ignore"); // Update page on update
user_pref("browser.tabs.crashReporting.sendReport", false); // Crash reports
user_pref("datareporting.healthreport.uploadEnabled", false); // Health report uploads
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Telemetry
user_pref("privacy.donottrackheader.enabled", false); // DNT is useless
user_pref("security.OCSP.enabled", 0); // OCSP
user_pref("shield.savant.enabled", false); // Savant study telemetry
user_pref("toolkit.coverage.endpoint.base", ""); // Telemetry coverage add-on
user_pref("toolkit.coverage.opt-out", true); // "Coverage" telemetry
user_pref("toolkit.telemetry.archive.enabled", false); // Telemetry
user_pref("toolkit.telemetry.coverage.opt-out", true); // Telemetry
user_pref("toolkit.telemetry.enabled", false); // Telemetry
user_pref("toolkit.telemetry.hybridContent.enabled", false); // Telemetry
user_pref("toolkit.telemetry.bhrPing.enabled", false); // Telemetry
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // Telemetry
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // Telemetry
user_pref("toolkit.telemetry.server", "data:,"); // Telemetry server
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // Telemetry
user_pref("toolkit.telemetry.updatePing.enabled", false); // Telemetry
user_pref("toolkit.telemetry.unified", false); // Telemetry

/* Annoyances */
user_pref("browser.aboutConfig.showWarning", false); // Warranty void message
user_pref("browser.backspace_action", 2); // Disable backspace for navigation
user_pref("browser.download.manager.addToRecentDocs", false); // Downloaded documents shown in Recents
user_pref("browser.download.manager.scanWhenDone", false); // Virus-scan after downloads
user_pref("browser.fixup.alternate.enabled", false); // URL fixup
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false); // Feature recommendations
user_pref("browser.quitShortcut.disabled", true); // Disable CTRL-Q
user_pref("browser.safebrowsing.blockedURIs.enabled", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.enabled", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // Safe browsing
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // Safe browsing
user_pref("browser.safebrowsing.malware.enabled", false); // Safe browsing
user_pref("browser.safebrowsing.phishing.enabled", false); // Safe browsing
user_pref("browser.slowStartup.notificationDisabled", true); // Slow startup warning
user_pref("browser.slowStartup.maxSamples", 0); // Slow startup warning
user_pref("browser.startup.homepage", "about:blank"); // Homepage
user_pref("browser.tabs.closeWindowWithLastTab", false); // Close window with last tab
user_pref("browser.uitour.enabled", false); // UI tour
user_pref("browser.uitour.url", ""); // UI tour URL
user_pref("browser.urlbar.delay", 0); // No delay for suggestions
user_pref("browser.urlbar.trimURLs", false); // Trim URLs
user_pref("dom.push.connection.enabled", false); // Push notifications
user_pref("dom.push.enabled", false); // Push notifications
user_preF("dom.push.serverURL", ""); // Push notifications server URL
user_pref("extensions.blocklist.enabled", false); // Extension blocklist
user_pref("extensions.blocklist.url", ""); // Extension blocklist URL
user_pref("extensions.getAddons.cache.enabled", false); // about:addons AMO cache
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // about:addons recommendations
user_pref("extensions.ui.lastCategory", "addons://list/extension"); // Go directly to my addons
user_pref("extensions.pocket.enabled", false); // Pocket
user_pref("extensions.webextensions.restrictedDomains", ""); // Allow webextensions to access store domains
user_pref("full-screen-api.transition-duration.enter", "0 0"); // Full screen fade-in
user_pref("full-screen-api.transition-duration.leave", "0 0"); // Full screen fade-out
user_pref("full-screen-api.transition.timeout", 0); // Full screen transition
user_pref("full-screen-api.warning.timeout", 0); // Full screen warning
user_pref("layout.word_select.eat_space_to_next_word", false); // Don't select space next to word
user_pref("network.captive-portal-service.enabled", false); // Captive portal detection
user_pref("network.connectivity-service.enabled", false); // Captive portal detection
user_pref("network.IDN_show_punycode", true); // Punycode
user_pref("network.manage-offline-status", false); // "Work offline" feature
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", true); // SSL MitM
user_pref("security.certerrors.mitm.priming.enabled", false); // SSL MitM
user_pref("security.certerrors.mitm.priming.endpoint", ""); // SSL MitM
user_pref("security.dialog_enable_delay", 0); // Download OK delay
user_pref("security.family_safety.mode", 0); // Family Safety
user_pref("security.insecure_field_warning.contextual.enabled", false); // "Insecure connection" warning in password fields on HTTP
user_pref("ui.use_standins_for_native_colors", true); // Disable reading color scheme
user_pref("xpinstall.signatures.required", false); // Add-on signing, Nightly and ESR only
user_pref("webgl.enable-debug-renderer-info", false); // WebGL debugging info (used for fingerprinting)

/* Features */
user_pref("browser.bookmarks.autoExportHTML", true); // Auto export bookmarks on shutdown
user_pref("browser.preferences.experimental", true); // Enable "experiments" preference pane
user_pref("browser.tabs.tabMinWidth", 120); // Tabs min width
user_pref("browser.uidensity", 1); // Compact style
user_pref("devtools.aboutdebugging.showSystemAddons", true); // Show system add-ons in about:debugging
user_pref("extensions.allowPrivateBrowsingByDefault", true); // Add-Ons in Private Browsing by default
user_pref("findbar.highlightAll", true); // CTRL+F highlight all
user_pref("general.autoScroll", true); // Middle-click scrolling
user_pref("network.trr.resolvers", '[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "NextDNS", "url": "https://trr.dns.nextdns.io/" },{ "name": "dnsforge.de", "url": "https://dnsforge.de/dns-query" },{ "name": "Digitale Gesellschaft (CH)", "url": "https://dns.digitale-gesellschaft.ch/dns-query" }, { "name": "Freifunk Muenchen", "url": "https://doh.ffmuc.net/dns-query" }, { "name": "BlahDNS (DE)", "url": "https://doh-de.blahdns.com/dns-query" }, { "name": "BlahDNS (FI)", "url": "https://doh-fi.blahdns.com/dns-query" }, { "name": "Quad9", "url": "https://dns.quad9.net/dns-query" }]'); // DoH DNS resolvers
user_pref("privacy.userContext.enabled", true); // Container
user_pref("privacy.userContext.ui.enabled", true); // Manage container UI
user_pref("permissions.isolateBy.userContext", true); // Isolate permissions by container
user_pref("security.insecure_connection_icon.enabled", true); // Insecure connection icon
user_pref("security.insecure_connection_icon.pbmode.enabled", true); // Insecure connection icon in Private Browsing
user_pref("security.insecure_connection_text.enabled", true); // Insecure connection text
user_pref("security.insecure_connection_text.pbmode.enabled", true); // Insecure connection text in Private Browsing
user_pref("security.secure_connection_icon_color_gray", false); // HTTPS padlock icon color
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // Enable userChrome.css
user_pref("pdfjs.enableScripting", false); // JavaScript in PDFs
user_pref("browser.menu.showViewImageInfo", true); // Show "view image info" in context menu again

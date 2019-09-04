//////////////////////////////////////
//      Firefox user.js by Brawl345
/////////////////////////////////////
// NOTE: All settings will be synced with Firefox Sync (services.sync.prefs.sync.*)

//////////////////////////////////////
//      Cosmetic
//////////////////////////////////////

// Show Punycode for URLs
user_pref("network.IDN_show_punycode", true);
user_pref("services.sync.prefs.sync.network.IDN_show_punycode", true);

// Compact style
user_pref("browser.uidensity", 1);
user_pref("services.sync.prefs.sync.browser.uidensity", true);

// Disable "warranty void" message for about:config
user_pref("general.warnOnAboutConfig", false);
user_pref("services.sync.prefs.sync.general.warnOnAboutConfig", true);

// Disable Add-Ons Discover Pane
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("services.sync.prefs.sync.extensions.htmlaboutaddons.discover.enabled", true);
user_pref("extensions.webservice.discoverURL", "");
user_pref("services.sync.prefs.sync.extensions.webservice.discoverURL", true);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("services.sync.prefs.sync.extensions.htmlaboutaddons.recommendations.enabled", true);

// Disable "OneOff" search icons
user_pref("browser.urlbar.oneOffSearches", false);
user_pref("services.sync.prefs.sync.browser.urlbar.oneOffSearches", true);

// Disable Animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.cosmeticAnimations.enabled", true);

// Full Screen: Disable fadein/fadeout
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("services.sync.prefs.sync.full-screen-api.transition-duration.enter", true);
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("services.sync.prefs.sync.full-screen-api.transition-duration.leave", true);
user_pref("full-screen-api.transition.timeout", 0);
user_pref("services.sync.prefs.sync.full-screen-api.transition.timeout", true);

// Full Screen: Disable warning
user_pref("full-screen-api.warning.timeout", 0);
user_pref("services.sync.prefs.sync.full-screen-api.warning.timeout", true);

// Don't trim URLs
user_pref("browser.urlbar.trimURLs", false);
user_pref("services.sync.prefs.sync.browser.urlbar.trimURLs", true);

//////////////////////////////////////
//      Functionality
//////////////////////////////////////

// Enable user.css (Firefox 68+)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("services.sync.prefs.sync.toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Change Startup homepage
user_pref("browser.startup.homepage", "about:blank");
user_pref("services.sync.prefs.sync.browser.startup.homepage", true);

// Disable New Tab Page
user_pref("browser.newtabpage.enabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", false);
user_pref("services.sync.prefs.sync.browser.newtab.preload", true);

// Enable Add-Ons on Mozilla websites
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("services.sync.prefs.sync.extensions.webextensions.restrictedDomains", true);

// Allow JavaScript in URL bar
user_pref("browser.urlbar.filter.javascript", false);
user_pref("services.sync.prefs.sync.browser.urlbar.filter.javascript", true);

// Don't add downloaded documents to "Recents"
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("services.sync.prefs.sync.browser.download.manager.addToRecentDocs", true);

// Auto-export bookmarks to HTML file on exit
user_pref("browser.bookmarks.autoExportHTML", true);
user_pref("services.sync.prefs.sync.browser.bookmarks.autoExportHTML", true);

// New autoplay permissions (Firefox 63+)
user_pref("media.autoplay.enabled.user-gestures-needed", true);
user_pref("services.sync.prefs.sync.media.autoplay.enabled.user-gestures-needed", true);

// Open last tabs on startup
user_preF("browser.startup.page", 3);
user_pref("services.sync.prefs.sync.browser.startup.page", true);

// Enable middle-click scrolling (for Linux)
user_pref("general.autoScroll", true);
user_pref("services.sync.prefs.sync.general.autoScroll", true);

// Select whole URL when clicking in address bar (Linux)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("services.sync.prefs.sync.browser.urlbar.clickSelectsAll", true);

// Disable URL bar delay
user_pref("browser.urlbar.delay", 0);
user_pref("services.sync.prefs.sync.browser.urlbar.delay", true);

// Disable Add-On signing requirement (Nightly and ESR only)
user_pref("xpinstall.signatures.required", false);
user_pref("services.sync.prefs.sync.xpinstall.signatures.required", true);

// Show System Add-Ons on about:debugging
user_pref("devtools.aboutdebugging.showSystemAddons", true);
user_pref("services.sync.prefs.sync.devtools.aboutdebugging.showSystemAddons", true);

// Disable virus scanning
user_pref("browser.download.manager.scanWhenDone", false);
user_pref("services.sync.prefs.sync.browser.download.manager.scanWhenDone", true);

// Disable backspace for navigation
user_pref("browser.backspace_action", 2);
user_pref("services.sync.prefs.sync.browser.backspace_action", true);

// Disable timeout for downloads
user_pref("security.dialog_enable_delay", 0);
user_pref("services.sync.prefs.sync.security.dialog_enable_delay", true);

// Don't close window when closing last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("services.sync.prefs.sync.browser.tabs.closeWindowWithLastTab", true);

// Don't "eat space" next to word when selecting
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("services.sync.prefs.sync.layout.word_select.eat_space_to_next_word", true);

// Findbar Highlight Modal like Opera 12 (buggy)
//user_pref("findbar.modalHighlight", true);
user_pref("services.sync.prefs.sync.findbar.modalHighlight", true);

// Findbar Highlight all
user_pref("findbar.highlightAll", true);
user_pref("services.sync.prefs.sync.findbar.highlightAll", true);

// Allow add-ons in private browsing by default
user_pref("extensions.allowPrivateBrowsingByDefault", true);
user_pref("services.sync.prefs.sync.extensions.allowPrivateBrowsingByDefault", true);

// Sync settings that are NOT on the target device (Firefox 68+)
user_pref("services.sync.prefs.dangerously_allow_arbitrary", true);

//////////////////////////////////////
//      Privacy
//////////////////////////////////////

// Enable Tracking Protection
//user_pref("privacy.trackingprotection.enabled", true);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true);

// Enable new Content Blocking UI for Firefox 62+
//user_pref("browser.contentblocking.ui.enabled", true);
//user_pref("services.sync.prefs.sync.browser.contentblocking.ui.enabled", true);

// Enable Fastblock for Content Blocker
//user_pref("browser.fastblock.enabled", true);
user_pref("services.sync.prefs.sync.browser.fastblock.enabled", true);

// Block tracker cookies
//user_pref("network.cookie.cookieBehavior", 4);
user_pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);

// Disable Heartbeat Feedback
user_pref("app.normandy.enabled", false);
user_pref("services.sync.prefs.sync.app.normandy.enabled", true);
user_pref("app.normandy.api_url", "");
user_pref("services.sync.prefs.sync.app.normandy.api_url", true);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
user_pref("shield.savant.enabled", false);
user_pref("services.sync.prefs.sync.shield.savant.enabled", true);

// Disable Shield Studies
user_pref("network.allow-experiments", false);
user_pref("services.sync.prefs.sync.network.allow-experiments", true);
user_pref("experiments.enabled", false);
user_pref("services.sync.prefs.sync.experiments.enabled", true);
user_pref("experiments.manifest.uri", "");
user_pref("services.sync.prefs.sync.experiments.manifest.uri", true);
user_pref("experiments.supported", false);
user_pref("services.sync.prefs.sync.experiments.supported", true);
user_pref("experiments.activeExperiment", false);
user_pref("services.sync.prefs.sync.experiments.activeExperiment", true);

// Disable URL Fixup (adding ".com")
user_pref("browser.fixup.alternate.enabled", false);
user_pref("services.sync.prefs.sync.browser.fixup.alternate.enabled", true);

// Disable "Insecure Connection" when entering passwords
user_pref("security.insecure_field_warning.contextual.enabled", false);
user_pref("services.sync.prefs.sync.security.insecure_field_warning.contextual.enabled", true);

// Mark HTTP sites as not secure
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("services.sync.prefs.sync.security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("services.sync.prefs.sync.security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("services.sync.prefs.sync.security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("services.sync.prefs.sync.security.insecure_connection_text.pbmode.enabled", true);

// Disable Tours
user_pref("browser.onboarding.enabled", false);
user_pref("services.sync.prefs.sync.browser.onboarding.enabled", true);
user_pref("browser.uitour.enabled", false);
user_pref("services.sync.prefs.sync.browser.uitour.enabled", true);
user_pref("browser.uitour.url", "");
user_pref("services.sync.prefs.sync.browser.uitour.url", true);
user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-addons.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-customize.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-default-browser.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-performance.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-performance.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-private-browsing.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-screenshots.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-sync.completed", false);
user_pref("services.sync.prefs.sync.browser.onboarding.tour.onboarding-tour-sync.completed", true);

// Send DNT header
user_pref("privacy.donottrackheader.enabled", true);
user_pref("services.sync.prefs.sync.privacy.donottrackheader.enabled", true);

// DNS over HTTPS with Quad9 (2 = also use system DNS, 3 = only use DNS over HTTPS)
//user_pref("network.trr.mode", 2);
user_pref("services.sync.prefs.sync.network.trr.mode", true);
//user_pref("network.trr.uri", "https://9.9.9.9/dns-query");
user_pref("services.sync.prefs.sync.network.trr.uri", true);

// Set ESNI for DNSoHTTPS
//user_pref("network.security.esni.enabled", true);
user_pref("services.sync.prefs.sync.network.security.esni.enabled", true);

// Disable Beacons
user_pref("beacon.enabled", false);
user_pref("services.sync.prefs.sync.beacon.enabled", true);

// Disable Battery API
user_pref("dom.battery.enabled", false);
user_pref("services.sync.prefs.sync.dom.battery.enabled", true);

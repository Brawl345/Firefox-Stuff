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
user_pref("general.warnOnAboutConfig", false); // DEPR in 71
user_pref("services.sync.prefs.sync.general.warnOnAboutConfig", true);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("services.sync.prefs.sync.browser.aboutConfig.showWarning", true);

// Disable Add-Ons Discover Pane
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("services.sync.prefs.sync.extensions.htmlaboutaddons.discover.enabled", true);
user_pref("extensions.webservice.discoverURL", "");
user_pref("services.sync.prefs.sync.extensions.webservice.discoverURL", true);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("services.sync.prefs.sync.extensions.htmlaboutaddons.recommendations.enabled", true);

// Disable Add-On recommendations on about:addons
user_pref("browser.discovery.enabled", false);
user_pref("services.sync.prefs.sync.browser.discovery.enabled", true);

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

// Green padlock again for HTTPS
user_pref("security.secure_connection_icon_color_gray", false);
user_pref("services.sync.prefs.sync.security.secure_connection_icon_color_gray", true);

//////////////////////////////////////
//      Functionality
//////////////////////////////////////

// Enable user.css (Firefox 68+)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("services.sync.prefs.sync.toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Change Startup homepage
user_pref("browser.startup.homepage", "about:blank");
user_pref("services.sync.prefs.sync.browser.startup.homepage", true);

// Enable automatic root certificate importing
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
user_pref("services.sync.prefs.sync.security.certerrors.mitm.auto_enable_enterprise_roots", true);

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

// Disable "middle mouse paste" on Linux
user_pref("middlemouse.paste", false); 
user_pref("services.sync.prefs.sync.middlemouse.paste", true);

// Sync settings that are NOT on the target device (Firefox 68+)
user_pref("services.sync.prefs.dangerously_allow_arbitrary", true);

// Various network-related preferences
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("services.sync.prefs.sync.network.http.max-persistent-connections-per-server", true);
user_pref("network.http.max-connections", 1500);
user_pref("services.sync.prefs.sync.network.http.max-connections", true);
user_pref("content.notify.interval", 500000);
user_pref("services.sync.prefs.sync.content.notify.interval", true);
user_pref("content.notify.ontimer", true);
user_pref("services.sync.prefs.sync.content.notify.ontimer", true);
user_pref("content.switch.threshold", 250000);
user_pref("services.sync.prefs.sync.content.switch.threshold", true);
user_pref("content.interrupt.parsing", true);
user_pref("services.sync.prefs.sync.content.interrupt.parsing", true);
user_pref("gfx.downloadable_fonts.fallback_delay", 0);
user_pref("services.sync.prefs.sync.gfx.downloadable_fonts.fallback_delay", true);
user_pref("gfx.downloadable_fonts.fallback_delay_short", 0);
user_pref("services.sync.prefs.sync.gfx.downloadable_fonts.fallback_delay_short", true);
user_pref("gfx.font_loader.delay", 0);
user_pref("services.sync.prefs.sync.gfx.font_loader.delay", true);
user_pref("image.decode-immediately.enabled", true);
user_pref("services.sync.prefs.sync.image.decode-immediately.enabled", true);
user_pref("image.mem.decode_bytes_at_a_time", 49152);
user_pref("services.sync.prefs.sync.image.mem.decode_bytes_at_a_time", true);


// Disable page preview while dragging a tab
user_pref("nglayout.enable_drag_images", false);
user_pref("services.sync.prefs.sync.nglayout.enable_drag_images", true);

// Tabs min width
user_pref("browser.tabs.tabMinWidth", 120);
user_pref("services.sync.prefs.sync.browser.tabs.tabMinWidth", true);

//////////////////////////////////////
//      Privacy
//////////////////////////////////////

// Sanitize extension blocklist URL
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
user_pref("services.sync.prefs.sync.extensions.blocklist.url", true);

// Sync "disable extension blocking" preference
user_pref("services.sync.prefs.sync.extensions.blocklist.enabled", true);

// Enable Tracking Protection
//user_pref("privacy.trackingprotection.enabled", true);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true);

// Block tracker cookies
//user_pref("network.cookie.cookieBehavior", 4);
user_pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);

// Disable Telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.unified", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.enabled", true);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("services.sync.prefs.sync.toolkit.telemetry.server", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.archive.enabled", true);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.newProfilePing.enabled", true);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.shutdownPingSender.enabled", true);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.updatePing.enabled", true);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.bhrPing.enabled", true);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.firstShutdownPing.enabled", true);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("services.sync.prefs.sync.toolkit.telemetry.hybridContent.enabled", true);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("services.sync.prefs.sync.toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("services.sync.prefs.sync.toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("services.sync.prefs.sync.toolkit.coverage.endpoint.base", true);
user_pref("browser.ping-centre.telemetry", false);
user_pref("services.sync.prefs.sync.browser.ping-centre.telemetry", true);

// Disable Health Report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("services.sync.prefs.sync.datareporting.healthreport.uploadEnabled", true);

// Disable Data Reporting
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("services.sync.prefs.sync.datareporting.policy.dataSubmissionEnabled", true);

// Disable Heartbeat Feedback
user_pref("app.normandy.enabled", false);
user_pref("services.sync.prefs.sync.app.normandy.enabled", true);
user_pref("app.normandy.api_url", "");
user_pref("services.sync.prefs.sync.app.normandy.api_url", true);
user_pref("app.normandy.user_id", "");
user_pref("services.sync.prefs.sync.app.normandy.user_id", true);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
user_pref("shield.savant.enabled", false);
user_pref("services.sync.prefs.sync.shield.savant.enabled", true);

// Disable Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("services.sync.prefs.sync.dom.ipc.plugins.flash.subprocess.crashreporter.enabled", true);

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

// Disable Activity Stream
user_pref("browser.library.activity-stream.enabled", false);
user_pref("services.sync.prefs.sync.browser.library.activity-stream.enabled", true);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.telemetry", true);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.telemetry", true);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.telemetry.ping.endpoint", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.providers.snippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", true);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", true);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.discoverystreamfeed", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.enabled", true);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.providers.cfr", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.providers.onboarding", true);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", true);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.default.sites", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.campaign.blocks", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.campaign.blocks", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.config", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.endpoints", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.rec.impressions", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.spoc.impressions", true);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", true);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", true);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.aboutpreferences", true);
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.asrouterfeed", true);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("services.sync.prefs.sync.browser.browser.newtabpage.activity-stream.feeds.favicon", true);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("services.sync.prefs.sync.browser.browser.newtabpage.activity-stream.feeds.newtabinit", true);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("services.sync.prefs.sync.browser.browser.newtabpage.activity-stream.feeds.places", true);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("services.sync.prefs.sync.browser.browser.newtabpage.activity-stream.feeds.prefs", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories.options", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.rec.impressions", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories.rec.impressions", true);
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.sections", true);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.systemtick", true);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.impressionId", true);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", true);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.telemetry.ut.events", true);

// Disable Page Thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("services.sync.prefs.sync.browser.pagethumbnails.capturing_disabled", true);

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

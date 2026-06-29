/**
 * View counter: shows the GoatCounter live count for this page PLUS the
 * historical Cargo total carried over as a per-page baseline, rendered as
 * "(N views)" to match the old site.
 *
 * NOTE: set GC_CODE to your registered GoatCounter site code.
 */
(function () {
	var GC_CODE = "yurimalina"; // <-- your GoatCounter code: https://<CODE>.goatcounter.com

	// Historical totals carried over from Cargo Collective (May 2026).
	var BASELINES = {
		"/": 4336,            // About (homepage)
		"/index.html": 4336,
		"/Publications/": 3835,
		"/Press/": 5475
	};

	var el = document.querySelector(".views");
	if (!el) return;

	var path = location.pathname;
	if (path === "") path = "/";
	var baseline = Object.prototype.hasOwnProperty.call(BASELINES, path) ? BASELINES[path] : 0;

	function render(n) {
		el.textContent = "(" + n.toLocaleString("en-US") + " views)";
	}

	render(baseline); // show immediately; update once the live count returns

	var url = "https://" + GC_CODE + ".goatcounter.com/counter/" + encodeURIComponent(path) + ".json";
	fetch(url)
		.then(function (r) { return r.ok ? r.json() : null; })
		.then(function (d) {
			if (!d || d.count == null) return;
			var live = parseInt(String(d.count).replace(/[^0-9]/g, ""), 10) || 0;
			render(baseline + live);
		})
		.catch(function () { /* keep baseline */ });
})();

!function(){

    const scripts = ["scripts/hideMenu.js", "scripts/changeNavType.js", "scripts/layout.js"]

    function genScript(src) {
        let script = document.createElement("script");
        script.src = src;
        return script;
    }

    function loadScripts() {
        for (let i = 0; i < scripts.length; i++) {
            document.body.appendChild(genScript(scripts[i]));
        }
    }

    addEventListener("DOMContentLoaded", _ => {
        loadScripts();
    })
}();
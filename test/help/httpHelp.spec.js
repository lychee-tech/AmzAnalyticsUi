var assert = require('assert');
import httpHelp from "../../pages/help/httpHelp";

describe("httpHep test", function () {
    it("test generating http basic credential ", function () {
        var c = httpHelp.buildHttpBasicCredential("wlin", "password");
        assert.equal("Basic d2xpbjpwYXNzd29yZA==", c);

    })

});

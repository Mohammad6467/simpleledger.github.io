(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{251:function(a,t,e){"use strict";e.r(t);var s=e(2),c=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gs-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gs-cli"}},[a._v("#")]),a._v(" GS++-CLI")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("View Repo:")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/blockparty-sh/cpp_slp_graph_search/tree/master/cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("ihttps://github.com/blockparty-sh/cpp_slp_graph_search/tree/master/cli"),e("OutboundLink")],1)])]),a._v(" "),e("p",[e("code",[a._v("gs++-cli")]),a._v(" is a swiss army knife of interating with GS++ servers. It allows you to perform graph searches, graph rendering, validation, and trusted validation.")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#examples"}},[a._v("Examples")]),e("ul",[e("li",[e("a",{attrs:{href:"#graphsearch"}},[a._v("--graphsearch")])]),e("li",[e("a",{attrs:{href:"#validate"}},[a._v("--validate")])]),e("li",[e("a",{attrs:{href:"#tvalidate"}},[a._v("--tvalidate")])]),e("li",[e("a",{attrs:{href:"#validatefile"}},[a._v("--validatefile")])]),e("li",[e("a",{attrs:{href:"#dot"}},[a._v("--dot")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("This program is most often used for debugging SLP, therefore it is encouraged and expected to modify the CLI to suit your particular needs. It has been used for investigating SLP implementation bugs, being able to rapidly find inconsistent states, and also as a tool to help implement Graph Search in wallets.")]),a._v(" "),e("p",[a._v("Using the "),e("a",{attrs:{href:"#dot"}},[a._v("--dot")]),a._v(" option you can create visual graphs which can be loaded into programs such as "),e("a",{attrs:{href:"https://cytoscape.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("cytoscape"),e("OutboundLink")],1),a._v(". These can help in understanding how your token is being used, or as part of debugging procedure to see what types of graphs are causing issue.")]),a._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),e("h3",{attrs:{id:"graphsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphsearch"}},[a._v("#")]),a._v(" --graphsearch")]),a._v(" "),e("p",[a._v("Get raw graph search data. This should be processed using another program or saved.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gs++-cli --host gs.fountainhead.cash --port 443 --use_tls --graphsearch d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\n")])])]),e("h4",{attrs:{id:"result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[a._v("#")]),a._v(" Result")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("AgAAAAN5pMyCb9TE0PnSHNz1vsHt95RTmwc2NI9c+rNWIdawxAIAAABqRzBEAiAsPzP4AlPUXKRJZcruOwDozVypeiCHBxfkEXrPp3y0awIgAxNizFb2/GDS2x+7ItUj7e/1O9OssXxGNhogNkSuGDtBIQMMmaW7a70AA0Y8lssaOP4V8k6H3YdhkQDOsvmbxHYwTv////95pMyCb9TE0PnSHNz1vsHt95RTmwc2NI9c+rNWIdawxAMAAABrSDBFAiEAwgNwN2KwugaYgcYjYuazVWSvyl0FQ9M/rj9tm6E8wUQCIEvSZMz5GqYXwbSHwfP/LMjUWxZNgJHNEQb/DMHk2IwlQSEDDJmlu2u9AANGPJbLGjj+FfJOh92HYZEAzrL5m8R2ME7/////eaTMgm/UxND50hzc9b7B7feUU5sHNjSPXPqzViHWsMQBAAAAakcwRAIgPAEqG2Q8qeZ3g9FW0S553ms5nTW8VJqz8BQY6uJ1+osCIAzOXVDTzhWd2CfsZ8j7/ruhqSKLYLkhSuUo0/gDPjENQSEDDJmlu2u9AANGPJbLGjj+FfJOh92HYZEAzrL5m8R2ME7/////BAAAAAAAAAAAOWoEU0xQAAEBBE1JTlQgxLDWIVaz+lyPNDYHm1OU9+3BvvXcHNL50MTUb4LMpHkBAggAAAAAAAAD6CICAAAAAAAAGXapFN64LpLJ6diryltq1estfV0u8mCEiKwiAgAAAAAAABl2qRTeuC6SyenYq8pbatXrLX1dLvJghIisQo6YAAAAAAAZdqkU3rguksnp2KvKW2rV6y19XS7yYISIrAAAAAA=\nAgAAAALND60Ok98EgoAW7lbeJqwywsh8c1GJcpkhupDMPtjbhwMAAABrSDBFAiEAr7kdTBKvM5EBrDf6DmXwWvh8dhGOQcigPe+fUWZ7HI4CIEwHMa+/MEhTXY1C/51iL1lOpJYGqVSH1fveEUlR1ItHQSEDDJmlu2u9AANGPJbLGjj+FfJOh92HYZEAzrL5m8R2ME7/////zQ+tDpPfBIKAFu5W3iasMsLIfHNRiXKZIbqQzD7Y24cBAAAAakcwRAIgDXjE5NICRwc48S6+4jhRO8mZNueAouNqPXqjEmMfKFoCIFmiMhK06FQHYOtQO3Y97bJ0q4B/7SZp8TblORHjsFe3QSEDDJmlu2u9AANGPJbLGjj+FfJOh92HYZEAzrL5m8R2ME7/////BAAAAAAAAAAAQWoEU0xQAAEBB0dFTkVTSVMEVVNESApIb25lc3RDb2luEXd3dy5ob25lc3Rjb2luLmlvTAABAgECCAAAAAAAAAAAIgIAAAAAAAAZdqkU3rguksnp2KvKW2rV6y19XS7yYISIrCICAAAAAAAAGXapFN64LpLJ6diryltq1estfV0u8mCEiKyxkJgAAAAAABl2qRTeuC6SyenYq8pbatXrLX1dLvJghIisAAAAAA==\n")])])]),e("h3",{attrs:{id:"validate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[a._v("#")]),a._v(" --validate")]),a._v(" "),e("p",[a._v("Performs a graph search like above, then runs the data through our own validation code to check the transaction.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gs++-cli --host gs.fountainhead.cash --port 443 --use_tls --validate d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\n")])])]),e("h4",{attrs:{id:"result-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result-2"}},[a._v("#")]),a._v(" Result:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("hydrate:\t0ms\nvalidate(txid): d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nvalidate(tx): d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nmint: front d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083 back d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nd679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083: valid\nvalidate:\t0ms\n")])])]),e("h3",{attrs:{id:"tvalidate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tvalidate"}},[a._v("#")]),a._v(" --tvalidate")]),a._v(" "),e("p",[a._v("Trusted Validation method, this just asks the server if the transaction is valid or not. This will only tell you if a tx is valid, it is impossible for it to know if a transaction it has not yet seen is valid.")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Not recommended unless you are running your own GS++ instance or using Federated Validation.")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gs++-cli --host gs.fountainhead.cash --port 443 --use_tls --tvalidate d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\n")])])]),e("h3",{attrs:{id:"validatefile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validatefile"}},[a._v("#")]),a._v(" --validatefile")]),a._v(" "),e("p",[a._v("Using the output from a "),e("a",{attrs:{href:"#graphsearch"}},[a._v("--graphsearch")]),a._v(" call, you can validate from a file.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gs++-cli --host gs.fountainhead.cash --port 443 --use_tls --graphsearch d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083 > /tmp/txs.gs\n$ gs++-cli --validatefile /tmp/txs.gs\n")])])]),e("h4",{attrs:{id:"result-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result-3"}},[a._v("#")]),a._v(" Result:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("c4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479\nd679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nvalidate(txid): d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nvalidate(tx): d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nmint: front d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083 back d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\nd679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083: valid\n")])])]),e("h3",{attrs:{id:"dot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dot"}},[a._v("#")]),a._v(" --dot")]),a._v(" "),e("p",[a._v("Generates a "),e("a",{attrs:{href:"https://www.graphviz.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Graphviz"),e("OutboundLink")],1),a._v(" dot file for rendering in an external program of the graph search data.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gs++-cli --host gs.fountainhead.cash --port 443 --use_tls --dot d679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083\n")])])]),e("h4",{attrs:{id:"result-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result-4"}},[a._v("#")]),a._v(" Result:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('digraph G {\ntd679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083 [label=""];\ntc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479 [label=""];\nt87dbd83ecc90ba2199728951737cc8c232ac26de56ee16808204df930ead0fcd [label=""];\nt87dbd83ecc90ba2199728951737cc8c232ac26de56ee16808204df930ead0fcd -> tc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479;\nt87dbd83ecc90ba2199728951737cc8c232ac26de56ee16808204df930ead0fcd -> tc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479;\ntc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479 -> td679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083;\ntc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479 -> td679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083;\ntc4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca479 -> td679656066917a9a3a1b886cb8b4ec0c933635585a3209739c0216023b26f083;\n}\n')])])])])}),[],!1,null,null,null);t.default=c.exports}}]);
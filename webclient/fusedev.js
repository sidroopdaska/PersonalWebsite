/**
 * Fusebox dev config file
 * Author: sishar
 */

const { FuseBox, BabelPlugin, CSSPlugin } = require("fuse-box");

const fuse = FuseBox.init({
	homeDir: "src/",
	output: "build/$name-bundle.js",
	plugins: [
		BabelPlugin(),
		CSSPlugin()
	]
});

fuse.dev();

fuse.bundle("app")
	.hmr()
	.watch()
	.instructions(`> layout/index.tsx`);

fuse.run();
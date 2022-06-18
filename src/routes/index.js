import routesConfig from "~/config/routes";

// Layouts
import { HeaderOnly } from "~/components/Layout";

import Following from "~/components/pages/Following";
import Home from "~/components/pages/Home";
import Profile from "~/components/pages/Profile";
import Upload from "~/components/pages/Upload";
import Search from "~/components/pages/Search";

// Public routes
const publicRoutes = [
	{
		path: routesConfig.home,
		component: Home,
	},
	{
		path: routesConfig.following,
		component: Following,
	},
	{
		path: routesConfig.profile,
		component: Profile,
	},
	{
		path: routesConfig.upload,
		component: Upload,
		layout: HeaderOnly,
	},
	{
		path: routesConfig.search,
		component: Search,
		layout: null,
	},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

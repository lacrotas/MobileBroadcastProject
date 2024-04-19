import MainPage from "../userPages/MainPage";
import {
    MAIN_ROUTE, CITY_ROUTE, EXPERT_ROUTE,
    MEATING_ROUTE, EXPERT_ADMIN_ROUTE, ADMIN_MAIN_ROUTE,
    CITY_ADMIN_ROUTE, MEATING_ADMIN_ROUTE, ADD_ADMIN_ROUTE,
    MEATING_ADD_ADMIN_ROUTE, COUNTRY_ADMIN_ROUTE, SPONSOR_STATEMENT,
    ADMIN_SPONSOR, LOGIN_ROUTE
} from './Const';
import CurrentCityPage from "../userPages/cityPage/CurrentCityPage";
import CityChoosePage from "../userPages/cityPage/CityChoosePage";
import ExpertChoosePage from "../userPages/expertPage/ExpertChoosePage";
import MeatingPage from "../userPages/meatingPage/MeatingPage";
import CurrentExpertInfo from "../userPages/expertPage/CurrentExpertInfo";
import AdminMainPage from "../adminPages/adminMainPage/AdminMainPage";
import AdminMeatingPage from "../adminPages/adminMeatingPage/AdminMeatingPage";
import AdminCityPage from "../adminPages/adminCityPage/AdminCityPage";
import AdminCountryPage from "../adminPages/adminCountryPage/AdminCountryPage";
import AdminExpertPage from "../adminPages/adminExpertPage/AdminExpertPage";
import AdminCurrentExpertInfo from "../adminPages/adminCurrentExpertPage/CurrentExpertInfo";
import CurrentAdminCityPage from "../adminPages/adminCityPage/CurrentAdminCityPage";
import AdminStatementPage from "../adminPages/adminStatementPage/AdminStatementPage";
import AdminSponsorPage from "../adminPages/adminSponsorPage/AdminSponsorPage";
import LoginPage from "../userPages/loginPage/LoginPage";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: CITY_ROUTE,
        Component: CityChoosePage
    },
    {
        path: CITY_ROUTE + '/:id',
        Component: CurrentCityPage
    },
    {
        path: EXPERT_ROUTE,
        Component: ExpertChoosePage
    },
    {
        path: EXPERT_ROUTE + '/:id',
        Component: CurrentExpertInfo
    },
    {
        path: MEATING_ROUTE,
        Component: MeatingPage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    }
];

export const adminRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: EXPERT_ADMIN_ROUTE + '/:id',
        Component: AdminCurrentExpertInfo
    },
    {
        path: EXPERT_ADMIN_ROUTE,
        Component: AdminExpertPage
    },
    {
        path: ADMIN_MAIN_ROUTE,
        Component: AdminMainPage
    },
    {
        path: COUNTRY_ADMIN_ROUTE,
        Component: AdminCountryPage
    },
    {
        path: CITY_ADMIN_ROUTE,
        Component: AdminCityPage
    },
    {
        path: CITY_ADMIN_ROUTE + "/:id",
        Component: CurrentAdminCityPage
    },
    {
        path: MEATING_ADMIN_ROUTE,
        Component: AdminMeatingPage
    },
    {
        path: ADD_ADMIN_ROUTE,
        Component: MainPage
    },
    {
        path: SPONSOR_STATEMENT,
        Component: AdminStatementPage
    },
    {
        path: ADMIN_SPONSOR,
        Component: AdminSponsorPage
    }
];
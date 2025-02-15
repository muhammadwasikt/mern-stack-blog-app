import AppLayout from "../layout/pages/AppLayout";
import Home from "../layout/pages/Home";
import About from "../layout/pages/About";
import Contact from "../layout/pages/Contact";
import BlogList from "../layout/auth/dashboards/BlogList";
import BlogDetailModal from "../components/common/BlogDetail";
import DashboardLayout from "../layout/auth/dashboards/DashboardLayout";
import Dashboard from "../layout/auth/dashboards/Dashboard";
import BlogForm from "../layout/auth/dashboards/BlogForm";
import UsersList from "../layout/auth/dashboards/UsersList";
import OwnBlogs from "../layout/auth/dashboards/OwnBlogs";
import SignIn from "../layout/auth/SignIn";
import SignUp from "../layout/auth/SignUp";
import ForgotPassword from "../layout/auth/ForgotPassword";
import ResetPassword from "../layout/auth/ResetPassword";
import EmailCheckPage from "../layout/auth/EmailCheck";
import OTPVerification from "../layout/auth/OtpVerification";
import ResendOtp from "../layout/auth/ResendOtp";
import NotFound from "../components/common/NotFound";




const routes = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog-list',
                element: <BlogList />
            },
            {
                path: '/blog-detail/:id',
                element: <BlogDetailModal />
            },

        ]
    },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/auth/dashboard',
                element: <Dashboard />
            },
            {
                path: '/blog/add',
                element: <BlogForm />
            },
            {
                path: '/blog/update/:id',
                element: <BlogForm />
            },
            {
                path: '/all-users',
                element: <UsersList />
            },
            {
                path: '/auth/blog-detail/:id',
                element: <BlogDetailModal />
            },
            {
                path: '/my-blogs',
                element: <OwnBlogs />
            },
            {
                path: '/blogs-list',
                element: <BlogList />
            },
        ]
    },
    {
        path: '/auth/sign-in',
        element: <SignIn />
    },
    {
        path: '/auth/sign-up',
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/reset-password/:token',
        element: <ResetPassword />
    },
    {
        path: '/password-reset-email',
        element: <EmailCheckPage />
    },
    {
        path: '/email-verification/:token',
        element: <OTPVerification />
    },
    {
        path: '/resend-otp',
        element: <ResendOtp />
    },
    {
        path: '*',
        element: <NotFound />
    }

]


export default routes;
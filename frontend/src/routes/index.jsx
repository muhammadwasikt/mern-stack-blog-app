import EmailCheckPage from "../Auth/EmailCheck";
import ForgotPassword from "../Auth/ForgotPassword";
import OTPVerification from "../Auth/OtpVerification";
import ResendOtp from "../Auth/ResendOtp";
import ResetPassword from "../Auth/ResetPassword";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Dashboard from "../dashboards/Dashboard";
import About from "../pages/About";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import DashboardLayout from "../dashboards/DashboardLayout";
import Contact from "../pages/Contact";
import MainLayout from "../pages/MainLayout";
import BlogDetailModal from "../components/common/BlogDetail";
import BlogForm from "../dashboards/BlogForm";
import UsersList from "../dashboards/UsersList";
import BlogList from "../dashboards/BlogList";
import OwnBlogs from "../dashboards/OwnBlogs";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
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
            }
        ]
    },
    {
        path: '*',
        element: <h1>Page Not Found</h1>
    }

]


export default routes;
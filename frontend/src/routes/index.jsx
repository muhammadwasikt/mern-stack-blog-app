import EmailCheckPage from "../Auth/EmailCheck";
import ForgotPassword from "../Auth/ForgotPassword";
import OTPVerification from "../Auth/OtpVerification";
import ResendOtp from "../Auth/ResendOtp";
import ResetPassword from "../Auth/ResetPassword";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import AdminDashboard from "../dashboards/AdminDashboard";
import About from "../pages/About";
import AppLayout from "../pages/AppLayout";
import BlogForm from "../pages/BlogForm";
import BlogList from "../pages/BlogList";
import Home from "../pages/Home";
import DashboardLayout from "../dashboards/DashboardLayout";
import UserDashboard from "../dashboards/UserDashboard";
import UsersList from "../pages/UsersList";
import Contact from "../pages/Contact";
import MainLayout from "../pages/MainLayout";
import BlogDetailModal from "../components/common/BlogDetailModal";

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
                        path: '/all-blogs',
                        element: <BlogList />
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
                        path: '/auth/admin',
                        element: <AdminDashboard />
                    },
                    {
                        path: '/auth/user',
                        element: <UserDashboard />
                    },
                    {
                        path: '/blog/:type',
                        element: <BlogForm />
                    },
                    {
                        path: '/all-users',
                        element: <UsersList />
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
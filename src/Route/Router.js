import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "../page/RegisterForm";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import LoginRoute from "./LoginRoute";
import LoginForm from "../page/LoginForm";
import DasboardLayout from "../layout/DashboardLayout";
import DashboardRoute from "./DashboardRoute";
import { GlobalProvider } from "../context/GlobalContext";
import JobList from "../component/JobList";
import NewJobForm from "../component/NewJobForm";
import ChangePassowrdForm from "../component/ChangePasswordForm";
import PageNotFound from "../page/404Page";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/register' element={<RegisterForm />} />
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/login'
            element={
              <LoginRoute>
                <Layout>
                  <LoginForm />
                </Layout>
              </LoginRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <DashboardRoute>
                <DasboardLayout>
                  <JobList />
                </DasboardLayout>
              </DashboardRoute>
            }
          />
          <Route
            path='/dashboard/vacancy'
            element={
              <DashboardRoute>
                <DasboardLayout>
                  <JobList />
                </DasboardLayout>
              </DashboardRoute>
            }
          />
          <Route
            path='/dashboard/add-vacancy'
            element={
              <DasboardLayout>
                <NewJobForm />
              </DasboardLayout>
            }
          />
          <Route
            path='/dashboard/vacancy/edit/:idData'
            element={
              <DasboardLayout>
                <NewJobForm />
              </DasboardLayout>
            }
          />
          <Route
            path='/dashboard/security'
            element={
              <DasboardLayout>
                <ChangePassowrdForm />
              </DasboardLayout>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Router;

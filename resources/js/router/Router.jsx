import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexTask from "../components/tasks/Index";
import NotFound from "../components/NotFound";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexTask />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Router;

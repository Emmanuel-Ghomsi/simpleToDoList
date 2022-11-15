import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexTask from "../components/tasks/Index";
import AddTask from "../components/tasks/Add";
import NotFound from "../components/NotFound";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexTask />} />
                <Route path="/task/create" element={<AddTask />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Router;

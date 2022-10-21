import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    const handleNewTask = () => {
        navigate("/add-task");
    };
    return (
        <div className="container">
            <div className="flex justify-between align-center">
                <h1>Liste des tâches</h1>
                <i
                    className="fa fa-plus text-success fs-1"
                    title="Ajouter une nouvelle tâche"
                    onClick={handleNewTask}
                ></i>
            </div>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Nom de la tâche</th>
                        <th>Description</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Auteur</th>
                        <th>Etat</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td data-th="Supplier Code">UPS5005</td>
                        <td data-th="Supplier Name">UPS</td>
                        <td data-th="Invoice Number">ASDF19218</td>
                        <td data-th="Invoice Date">06/25/2016</td>
                        <td data-th="Due Date">12/25/2016</td>
                        <td data-th="Net Amount">$8,322.12</td>
                        <td className="flex justify-center">
                            <i className="fa fa-edit text-info mx-2"></i>
                            <i className="fa fa-trash-alt text-danger mx-2"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Index;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const handleNewTask = () => {
        navigate("/task/create");
    };

    // Before all...

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
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => {
                            return (
                                <tr key={index}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.start_date}</td>
                                    <td>{task.end_date}</td>
                                    <td>{task.author}</td>
                                    <td>{task.state}</td>
                                    <td className="flex justify-center">
                                        <i className="fa fa-edit text-info mx-2"></i>
                                        <i className="fa fa-trash-alt text-danger mx-2"></i>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={7}>
                                Aucune tâche pour l'instant bien vouloir en
                                créer
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Index;

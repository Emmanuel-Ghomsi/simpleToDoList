import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="form">
            <i
                className="fa fa-arrow-left text-white fs-1"
                title="Ajouter une nouvelle tâche"
                onClick={handleBack}
            ></i>
            <h1>Ajouter une tâche</h1>
            <form method="post">
                <input
                    type="text"
                    name="title"
                    placeholder="Titre de la tâche"
                />
                <textarea
                    name="description"
                    placeholder="Description de la tâche"
                ></textarea>
                <div className="flex justify-between">
                    <div className="flex flex-column">
                        <label>Date de début</label>
                        <input type="date" name="start_date" />
                    </div>
                    <div className="flex flex-column">
                        <label>Date de fin</label>
                        <input type="date" name="end_date" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block btn-large"
                >
                    Enregistrer la tâche
                </button>
            </form>
        </div>
    );
}

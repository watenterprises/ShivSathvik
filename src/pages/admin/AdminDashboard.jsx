import React from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../../context/PropertyContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { properties, deleteProperty } = useProperties();

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            deleteProperty(id);
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="container">
                <div className="admin-header">
                    <h1>Admin Dashboard</h1>
                    <Link to="/admin/add" className="btn btn-primary">Add New Property</Link>
                </div>

                <div className="properties-table-container">
                    <table className="properties-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map(property => (
                                <tr key={property.id}>
                                    <td>
                                        <img
                                            src={property.image}
                                            alt={property.title}
                                            style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                    </td>
                                    <td>{property.title}</td>
                                    <td>{property.location}</td>
                                    <td>{property.price}</td>
                                    <td>{property.type}</td>
                                    <td>
                                        <span className={`status-badge status-${property.status}`}>
                                            {property.status}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/admin/edit/${property.id}`} className="action-btn edit-btn">Edit</Link>
                                        <button onClick={() => handleDelete(property.id)} className="action-btn delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

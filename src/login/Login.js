import React, { useState } from "react";
import {
    Box,
    Tab,
    Tabs,
    Button,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    Input,
    FormHelperText
} from "@mui/material";

const LoginForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setFormData({ firstName: '', lastName: '', email: '', password: '', mobile: '' });
        setErrors({});
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        let newErrors = {};

        // Validation for Login
        if (activeTab === 0) {
            if (!formData.email) newErrors.email = "Please fill out this field";
            if (!formData.password) newErrors.password = "Please fill out this field";
        }

        // Validation for Register
        if (activeTab === 1) {
            if (!formData.firstName) newErrors.firstName = "Please fill out this field";
            if (!formData.lastName) newErrors.lastName = "Please fill out this field";
            if (!formData.email) newErrors.email = "Please fill out this field";
            if (!formData.password) newErrors.password = "Please fill out this field";
            if (!formData.mobile) newErrors.mobile = "Please fill out this field";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            if (activeTab === 0) {
                console.log('Login', {
                    email: formData.email,
                    password: formData.password
                });
            } else {
                console.log('Register', formData);
            }
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <Paper elevation={3} sx={{ width: 350 }}>
                <Box sx={{ backgroundColor: 'purple', padding: 2, color: 'white' }}>
                    <Typography variant="h6">Authentication</Typography>
                </Box>
                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Login" />
                    <Tab label="REGISTER" />
                </Tabs>
                <Box px={4} py={4}>
                    {activeTab === 1 && (
                        <>
                            {/* ✅ First Name */}
                            <FormControl fullWidth margin="normal" error={!!errors.firstName}>
                                <InputLabel>First Name</InputLabel>
                                <Input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && (
                                    <FormHelperText>{errors.firstName}</FormHelperText>
                                )}
                            </FormControl>

                            {/* ✅ Last Name */}
                            <FormControl fullWidth margin="normal" error={!!errors.lastName}>
                                <InputLabel>Last Name</InputLabel>
                                <Input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && (
                                    <FormHelperText>{errors.lastName}</FormHelperText>
                                )}
                            </FormControl>
                        </>
                    )}

                    {/* ✅ Email */}
                    <FormControl fullWidth margin="normal" error={!!errors.email}>
                        <InputLabel>Email</InputLabel>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
                    </FormControl>

                    {/* ✅ Password */}
                    <FormControl fullWidth margin="normal" error={!!errors.password}>
                        <InputLabel>Password</InputLabel>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
                    </FormControl>

                    {/* ✅ Mobile (Register only) */}
                    {activeTab === 1 && (
                        <FormControl fullWidth margin="normal" error={!!errors.mobile}>
                            <InputLabel>Mobile No.</InputLabel>
                            <Input
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            {errors.mobile && <FormHelperText>{errors.mobile}</FormHelperText>}
                        </FormControl>
                    )}

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        onClick={handleSubmit}
                    >
                        {activeTab === 0 ? 'LOGIN' : 'REGISTER'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginForm;

import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Row, Col, Select, DatePicker } from "antd";
import { 
  CalendarOutlined, 
  UserOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  MessageOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const appointmentTimes = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const serviceTypes = [
  "General Checkup", "Teeth Cleaning", "Cosmetic Consultation", 
  "Dental Filling", "Root Canal", "Teeth Whitening", "Emergency Care"
];

export default function AppointmentForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState(0);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("appointments") || "[]");
      const newAppointment = {
        ...values,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        status: "pending"
      };
      localStorage.setItem("appointments", JSON.stringify([...saved, newAppointment]));
      
      form.resetFields();
      setAppointmentCount(prev => prev + 1);
      setIsSubmitting(false);
      
      message.success({
        content: "Appointment request submitted successfully! We'll contact you within 24 hours.",
        duration: 5,
        style: {
          marginTop: '20vh',
        },
      });
    }, 2000);
  };

  return (
    <div 
      style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Animation Elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 300,
          height: 300,
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          width: 200,
          height: 200,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      <div style={{ maxWidth: 1000, margin: "auto", position: "relative" }}>
        <Row gutter={[40, 40]} align="middle">
          {/* Left Side - Information */}
          <Col xs={24} lg={10}>
            <div 
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 24,
                padding: 40,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 30 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 10px 40px rgba(18, 179, 182, 0.3)",
                  }}
                >
                  <CalendarOutlined style={{ fontSize: 40, color: "#fff" }} />
                </div>
                <Title level={2} style={{ color: "#fff", marginBottom: 16, fontSize: 32 }}>
                  Book Your Visit
                </Title>
                <Paragraph style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 16, lineHeight: 1.6 }}>
                  Schedule your appointment with our expert dental team. We're here to give you the best care possible.
                </Paragraph>
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: <CheckCircleOutlined />, text: "Same-day appointments available" },
                  { icon: <ClockCircleOutlined />, text: "Flexible scheduling options" },
                  { icon: <UserOutlined />, text: "Experienced dental professionals" },
                ].map((feature, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(18, 179, 182, 0.3)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid rgba(18, 179, 182, 0.5)",
                      }}
                    >
                      {React.cloneElement(feature.icon, { style: { color: "#12b3b6", fontSize: 18 } })}
                    </div>
                    <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 15 }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div 
                style={{
                  marginTop: 40,
                  padding: 20,
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 16,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center"
                }}
              >
                <Title level={3} style={{ color: "#12b3b6", marginBottom: 8 }}>
                  {appointmentCount + 1247}+
                </Title>
                <Paragraph style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: 0, fontSize: 14 }}>
                  Happy patients served
                </Paragraph>
              </div>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col xs={24} lg={14}>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 50,
                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form Header */}
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <Title level={3} style={{ color: "#23356f", marginBottom: 12, fontSize: 28 }}>
                  Schedule Appointment
                </Title>
                <Paragraph style={{ color: "#617195", fontSize: 16 }}>
                  Fill out the form below and we'll contact you to confirm your appointment
                </Paragraph>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                requiredMark={false}
              >
                <Row gutter={[20, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Full Name</span>}
                      name="name"
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input
                        prefix={<UserOutlined style={{ color: "#12b3b6" }} />}
                        placeholder="Enter your full name"
                        style={{
                          borderRadius: 12,
                          border: "2px solid #f0f2f5",
                          padding: "12px 16px",
                          fontSize: 15,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#12b3b6";
                          e.target.style.boxShadow = "0 0 0 3px rgba(18, 179, 182, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#f0f2f5";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Phone Number</span>}
                      name="phone"
                      rules={[
                        { required: true, message: "Please enter your phone number" },
                        { pattern: /^\+?[\d\s\-\(\)]+$/, message: "Please enter a valid phone number" }
                      ]}
                    >
                      <Input
                        prefix={<PhoneOutlined style={{ color: "#12b3b6" }} />}
                        placeholder="Enter your phone number"
                        style={{
                          borderRadius: 12,
                          border: "2px solid #f0f2f5",
                          padding: "12px 16px",
                          fontSize: 15,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#12b3b6";
                          e.target.style.boxShadow = "0 0 0 3px rgba(18, 179, 182, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#f0f2f5";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[20, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Email Address</span>}
                      name="email"
                      rules={[
                        { type: "email", message: "Please enter a valid email" },
                        { required: true, message: "Please enter your email" }
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined style={{ color: "#12b3b6" }} />}
                        placeholder="Enter your email"
                        style={{
                          borderRadius: 12,
                          border: "2px solid #f0f2f5",
                          padding: "12px 16px",
                          fontSize: 15,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#12b3b6";
                          e.target.style.boxShadow = "0 0 0 3px rgba(18, 179, 182, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#f0f2f5";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Service Type</span>}
                      name="serviceType"
                      rules={[{ required: true, message: "Please select a service" }]}
                    >
                      <Select
                        placeholder="Select a service"
                        style={{
                          borderRadius: 12,
                        }}
                        size="large"
                      >
                        {serviceTypes.map(service => (
                          <Option key={service} value={service}>{service}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[20, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Preferred Date</span>}
                      name="preferredDate"
                      rules={[{ required: true, message: "Please select a date" }]}
                    >
                      <DatePicker
                        style={{
                          width: "100%",
                          borderRadius: 12,
                          border: "2px solid #f0f2f5",
                          padding: "12px 16px",
                        }}
                        placeholder="Select date"
                        size="large"
                        disabledDate={(current) => current && current < new Date()}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: "#23356f", fontWeight: 600 }}>Preferred Time</span>}
                      name="preferredTime"
                      rules={[{ required: true, message: "Please select a time" }]}
                    >
                      <Select
                        placeholder="Select time"
                        style={{ borderRadius: 12 }}
                        size="large"
                      >
                        {appointmentTimes.map(time => (
                          <Option key={time} value={time}>{time}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label={<span style={{ color: "#23356f", fontWeight: 600 }}>Additional Message</span>}
                  name="message"
                >
                  <TextArea
                    prefix={<MessageOutlined style={{ color: "#12b3b6" }} />}
                    placeholder="Tell us about your specific needs or concerns (optional)"
                    rows={4}
                    style={{
                      borderRadius: 12,
                      border: "2px solid #f0f2f5",
                      fontSize: 15,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#12b3b6";
                      e.target.style.boxShadow = "0 0 0 3px rgba(18, 179, 182, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#f0f2f5";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Form.Item>

                <Form.Item style={{ marginTop: 30 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    block
                    style={{
                      height: 56,
                      borderRadius: 28,
                      background: isSubmitting 
                        ? "#f0f0f0" 
                        : "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                      border: "none",
                      fontSize: 18,
                      fontWeight: 600,
                      boxShadow: "0 10px 40px rgba(18, 179, 182, 0.3)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 15px 50px rgba(18, 179, 182, 0.4)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 10px 40px rgba(18, 179, 182, 0.3)";
                      }
                    }}
                  >
                    {isSubmitting ? "Submitting Request..." : "Book My Appointment"}
                  </Button>
                </Form.Item>
              </Form>

              {/* Trust Indicators */}
              <div 
                style={{
                  marginTop: 30,
                  padding: 20,
                  background: "rgba(18, 179, 182, 0.05)",
                  borderRadius: 12,
                  textAlign: "center",
                  border: "1px solid rgba(18, 179, 182, 0.1)"
                }}
              >
                <Paragraph style={{ color: "#617195", marginBottom: 0, fontSize: 13 }}>
                  🔒 Your information is secure and confidential. We'll contact you within 24 hours to confirm your appointment.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

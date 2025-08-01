import React from "react";
import { Card, Typography, Badge, Row, Col, Avatar } from "antd";
import { CheckCircleOutlined, StarFilled } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const doctors = [
  {
    name: "Dr. Jane Smith",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    title: "BDS, MDS",
    special: "Cosmetic Dental Surgeon",
    desc: "15+ years clinical experience. A smile design expert with international certifications.",
    rating: 4.9,
    specialties: ["Cosmetic Dentistry", "Smile Makeover", "Invisalign"],
    lead: true,
  },
  {
    name: "Dr. Rahul Mehra",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "BDS",
    special: "Pediatric & Surgical Dentistry",
    desc: "Gentle with children and surgical work. Speaker and mentor in modern dental care.",
    rating: 4.8,
    specialties: ["Pediatric Care", "Oral Surgery", "Sedation"],
    lead: false,
  },
];

export default function Doctors() {
  return (
    <div style={{ padding: "100px 20px", background: "#f5f6fa" }}>
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title
            level={2}
            style={{
              color: "#22356f",
              fontSize: 42,
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            Meet Our Expert Team
          </Title>
          <Paragraph style={{ fontSize: 18, color: "#617195", maxWidth: 600, margin: "auto" }}>
            Our experienced dental professionals are committed to providing you with the
            highest quality care in a comfortable environment.
          </Paragraph>
        </div>

        <Row gutter={[40, 40]} justify="center">
          {doctors.map((doctor, idx) => (
            <Col xs={24} sm={24} md={12} lg={10} key={idx}>
              <Card
                style={{
                  borderRadius: 24,
                  border: "none",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                bodyStyle={{ padding: 0 }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 25px 70px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: 40,
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {doctor.lead && (
                    <Badge
                      count="Team Lead"
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        backgroundColor: "#12b3b6",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                  )}
                  <Avatar
                    src={doctor.image}
                    size={120}
                    style={{
                      border: "4px solid rgba(255, 255, 255, 0.3)",
                      marginBottom: 20,
                    }}
                  />
                  <Title level={4} style={{ color: "#fff", marginBottom: 8 }}>
                    {doctor.name}
                  </Title>
                  <div style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: 16, marginBottom: 16 }}>
                    {doctor.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <StarFilled style={{ color: "#ffd700" }} />
                    <span style={{ color: "#fff", fontWeight: 600 }}>{doctor.rating}</span>
                  </div>
                </div>

                <div style={{ padding: 30 }}>
                  <Title level={5} style={{ color: "#12b3b6", marginBottom: 12 }}>
                    {doctor.special}
                  </Title>
                  <Paragraph style={{ color: "#617195", fontSize: 15, marginBottom: 20 }}>
                    {doctor.desc}
                  </Paragraph>
                  <div>
                    <Title level={6} style={{ marginBottom: 12, color: "#23356f" }}>
                      Specialties:
                    </Title>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {doctor.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(18, 179, 182, 0.1)",
                            color: "#12b3b6",
                            padding: "4px 12px",
                            borderRadius: 16,
                            fontSize: 13,
                            fontWeight: 500,
                          }}
                        >
                          <CheckCircleOutlined style={{ marginRight: 4 }} />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

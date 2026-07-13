import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Brand */}
        <FooterBox>
          <Logo>
            Auto<span>Lux</span>
          </Logo>

          <Description>
            Premium avtomobil platforması. Arzuladığınız avtomobili təhlükəsiz
            və rahat şəkildə tapın.
          </Description>

          <Socials>
            <Social>
              <FaInstagram />
            </Social>

            <Social>
              <FaFacebook />
            </Social>

            <Social>
              <FaLinkedin />
            </Social>
          </Socials>
        </FooterBox>

        {/* Links */}
        <FooterBox>
          <Title>Quick Links</Title>

          <FooterLink>Home</FooterLink>

          <FooterLink>Cars</FooterLink>

          <FooterLink>About</FooterLink>

          <FooterLink>Contact</FooterLink>
        </FooterBox>

        {/* Contact */}
        <FooterBox>
          <Title>Contact Us</Title>

          <Info>
            <FaMapMarkerAlt />
            Bakı, Azerbaijan
          </Info>

          <Info>
            <FaPhone />
            +994 50 000 00 00
          </Info>

          <Info>
            <FaEnvelope />
            info@autolux.com
          </Info>
        </FooterBox>
      </FooterContent>

      <Bottom>© 2026 AutoLux. All rights reserved.</Bottom>
    </FooterContainer>
  );
}
export const FooterContainer = styled.footer`
  background: #111827;
  padding: 60px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
`;
export const FooterContent = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Logo = styled.h2`
  font-size: 30px;
  margin: 0;
  span {
    color: #ef4444;
  }
`;
export const Description = styled.p`
  color: #9ca3af;
  line-height: 1.7;
  max-width: 350px;
  margin: 0;
`;
export const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 10px;
`;
export const FooterLink = styled.div`
  color: #9ca3af;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ef4444;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #9ca3af;
  svg {
    color: #ef4444;
  }
`;
export const Socials = styled.div`
  display: flex;
  gap: 12px;
`;
export const Social = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ef4444;
    transform: translateY(-3px);
  }
`;
export const Bottom = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
`;

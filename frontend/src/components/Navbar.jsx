import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch, FaHeart, FaUser, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <Nav>
      <Container>
        {/* Logo */}

        <Logo>
          <h1>
            Auto<span>Lux</span>
          </h1>
        </Logo>

        {/* Menu */}

        <Menu>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/cars">Cars</StyledLink>

          <StyledLink to="/about">About</StyledLink>

          <StyledLink to="/contact">Contact</StyledLink>
        </Menu>

        {/* Right Side */}

        <Right>
          {/* Search */}

          <Search>
            <FaSearch />

            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>

          {/* Wishlist */}

          <IconBox>
            <FaHeart />
          </IconBox>

          {/* User */}

          <IconBox>
            <FaUser />
          </IconBox>

          {/* Login */}

          {user ? (
            <LoginButton onClick={() => navigate("/profile")}>
              {user.name}
            </LoginButton>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          )}

          {/* Mobile */}

          <MobileButton>
            <FaBars />
          </MobileButton>
        </Right>
      </Container>
    </Nav>
  );
}

export const Nav = styled.nav`
  width: 100%;
  height: 85px;
  background: #111827;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: white;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
  }

  span {
    color: #ef4444;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #ef4444;
  }

  &.active {
    color: #ef4444;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Search = styled.div`
  width: 320px;
  height: 48px;
  background: #1f2937;
  border-radius: 50px;

  display: flex;
  align-items: center;

  padding: 0 18px;

  @media (max-width: 1200px) {
    width: 240px;
  }

  @media (max-width: 992px) {
    display: none;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    color: white;
    font-size: 15px;
    margin-left: 10px;
  }

  svg {
    color: #9ca3af;
    font-size: 20px;
  }
`;

export const IconBox = styled.div`
  width: 45px;
  height: 45px;

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
  }

  svg {
    font-size: 20px;
  }
`;

export const LoginButton = styled.button`
  padding: 12px 28px;

  border: none;

  border-radius: 40px;

  background: #ef4444;

  color: white;

  font-size: 15px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #dc2626;
  }
`;

export const MobileButton = styled.div`
  display: none;

  width: 45px;
  height: 45px;

  border-radius: 50%;

  background: #1f2937;

  align-items: center;
  justify-content: center;

  color: white;

  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
  }

  svg {
    font-size: 22px;
  }
`;

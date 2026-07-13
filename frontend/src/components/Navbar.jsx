import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch, FaHeart, FaUser, FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    setUserOpen(false);
    setMenuOpen(false);
    navigate("/login");
  };

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

          {/* Login */}

          {user ? (
            <UserWrapper>
              <UserInfo onClick={() => setUserOpen(!userOpen)}>
                <Avatar>
                  <FaUser />
                </Avatar>

                <UserName>
                  <small>Hello</small>
                  <p>{user.name}</p>
                </UserName>
              </UserInfo>

              {userOpen && (
                <Dropdown>
                  <DropdownItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownItem>

                  <DropdownItem>My Cars</DropdownItem>

                  <DropdownItem>Favorites</DropdownItem>

                  <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                </Dropdown>
              )}
            </UserWrapper>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          )}

          {/* Mobile */}

          <MobileButton onClick={() => setMenuOpen(true)}>
            <FaBars />
          </MobileButton>
        </Right>
      </Container>
      {menuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </CloseButton>

          <MobileLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileLink>

          <MobileLink to="/cars" onClick={() => setMenuOpen(false)}>
            Cars
          </MobileLink>

          <MobileLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </MobileLink>

          <MobileLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileLink>

          {!user && (
            <MobileLogin onClick={() => navigate("/login")}>Login</MobileLogin>
          )}

          {user && <MobileLogout onClick={handleLogout}>Logout</MobileLogout>}
        </MobileMenu>
      )}
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

  @media (max-width: 768px) {
    width: 94%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: white;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
  }

  span {
    color: #ef4444;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
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
  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 992px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
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
    width: 220px;
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
export const UserWrapper = styled.div`
  position: relative;
  z-index: 3000;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.8;
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
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    svg {
      font-size: 17px;
    }
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
  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 14px;
  }
`;
export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

export const UserName = styled.div`
  small {
    display: block;
    color: #9ca3af;
    font-size: 12px;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  width: 200px;
  background: #111827;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 2000;
  @media (max-width: 480px) {
    width: 170px;
  }
`;
export const DropdownItem = styled.div`
  padding: 12px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ef4444;
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
  transition: 0.3s;
  &:hover {
    background: #ef4444;
  }
  svg {
    font-size: 22px;
  }
  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    svg {
      font-size: 18px;
    }
  }
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background: #111827;
  padding: 90px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  z-index: 5000;
  animation: slide 0.3s ease;
  @keyframes slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (max-width: 480px) {
    width: 260px;
  }
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
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
`;
export const MobileLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: 600;
  padding: 12px 15px;
  border-radius: 12px;
  transition: 0.3s;
  &:hover {
    background: #ef4444;
  }
`;
export const MobileLogin = styled.button`
  margin-top: 20px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: #ef4444;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
export const MobileLogout = styled.button`
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: #dc2626;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router"; 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  ChartLine,
  ChartNetworkIcon,
  LayoutDashboard,
  LogOut,
  RadioTowerIcon,
  ShieldEllipsisIcon,
  TowerControl,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const navigation = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      description: "Halaman utama sistem",
      color: "bg-blue-500"
    },
    {
      name: "Infografis",
      icon: ChartLine,
      href: "/infografis",
      description: "Visualisasi data dan grafik",
      color: "bg-green-500"
    },
    {
      name: "Anomali Gardu Induk",
      icon: RadioTowerIcon,
      href: "/anomali-gardu-induk",
      description: "Monitoring anomali gardu induk",
      color: "bg-purple-500"
    },
    {
      name: "Anomali Proteksi",
      icon: ShieldEllipsisIcon,
      href: "/anomali-proteksi",
      description: "Monitoring sistem proteksi",
      color: "bg-red-500"
    },
    {
      name: "Anomali Jaringan",
      icon: ChartNetworkIcon,
      href: "/anomali-jaringan",
      description: "Monitoring jaringan transmisi",
      color: "bg-orange-500"
    },
    // {
    //   name: "Gardu Induk",
    //   icon: TowerControl,
    //   href: "/gardu-induk",
    //   description: "Data master gardu induk",
    //   color: "bg-indigo-500"
    // }
  ];
  
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="w-100% h-100%">
      <IconButton 
        variant="text" 
        size="lg" 
        onClick={openDrawer}
        className="hover:bg-blue-50 transition-colors duration-200"
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-gray-700" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-gray-700" />
        )}
      </IconButton>
      
      <Drawer 
        open={isDrawerOpen} 
        onClose={closeDrawer}
        className="shadow-2xl"
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4 bg-gradient-to-b from-blue-50 via-white to-indigo-50"
        >
          {/* Header with Logo */}
          <div className="mb-8 flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <img
                src="./img/Logo_PLN.png"
                alt="PLN Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <Typography variant="h5" className="text-white font-bold">
                PLN
              </Typography>
              <Typography variant="small" className="text-blue-100">
                Power System Monitor
              </Typography>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-2">
            <Typography variant="small" className="text-gray-600 font-semibold px-4 mb-4 uppercase tracking-wider">
              Menu Utama
            </Typography>
            
            <List className="space-y-1">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link to={item.href} key={index} onClick={closeDrawer}>
                    <ListItem 
                      className={`
                        group rounded-xl transition-all duration-300 transform hover:scale-105 
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                          : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:shadow-md'
                        }
                      `}
                    >
                      <ListItemPrefix>
                        <div className={`
                          p-2 rounded-lg transition-all duration-300
                          ${isActive 
                            ? 'bg-white/20 backdrop-blur-sm' 
                            : `${item.color} group-hover:scale-110`
                          }
                        `}>
                          <Icon className={`
                            h-5 w-5 transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-white'}
                          `} />
                        </div>
                      </ListItemPrefix>
                      <div>
                        <Typography 
                          variant="small" 
                          className={`
                            font-semibold transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}
                          `}
                        >
                          {item.name}
                        </Typography>
                        <Typography 
                          variant="small" 
                          className={`
                            text-xs transition-colors duration-300
                            ${isActive ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-600'}
                          `}
                        >
                          {item.description}
                        </Typography>
                      </div>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>

          {/* User Section */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <Typography variant="small" className="text-gray-600 font-semibold px-4 mb-4 uppercase tracking-wider">
              Akun
            </Typography>
            
            <ListItem 
              onClick={handleLogout}
              className="group rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 text-gray-700 hover:shadow-md transform hover:scale-105 cursor-pointer"
            >
              <ListItemPrefix>
                <div className="p-2 rounded-lg bg-red-500 transition-all duration-300 group-hover:scale-110">
                  <LogOut className="h-5 w-5 text-white" />
                </div>
              </ListItemPrefix>
              <div>
                <Typography variant="small" className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  Logout
                </Typography>
                <Typography variant="small" className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  Keluar dari sistem
                </Typography>
              </div>
            </ListItem>
          </div>
        </Card>
      </Drawer>
    </div>
  );
};

export default Sidebar;

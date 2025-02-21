"use client";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; 
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

import { supabase } from "../utils/supabaseClient";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const navigation = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
    },
    {
      name: "Infografis",
      icon: ChartLine,
      href: "/infografis",
    },
    {
      name: "Anomali Gardu Induk",
      icon: RadioTowerIcon,
      href: "/anomali-gardu-induk",
    },
    {
      name: "Anomali Proteksi",
      icon: ShieldEllipsisIcon,
      href: "/anomali-proteksi",
    },
    {
      name: "Anomali Jaringan",
      icon: ChartNetworkIcon,
      href: "/anomali-jaringan",
    },
    {
      name: "Gardu Induk",
      icon: TowerControl,
      href: "/gardu-induk",
    }
  ];
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              PLN
            </Typography>
          </div>
          <List>
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link to={item.href} key={index}>
                  <ListItem>
                    <ListItemPrefix>
                      <Icon className="h-5 w-5" />
                    </ListItemPrefix>
                    {item.name}
                  </ListItem>
                </Link>
              );
            })}

            <ListItem onClick={handleLogout}>
              <ListItemPrefix>
                <LogOut className="h-5 w-5"></LogOut>
              </ListItemPrefix>
              Logout
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
};

export default Sidebar;

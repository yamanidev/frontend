import Analytics from "@mui/icons-material/Analytics";
import BorderColor from "@mui/icons-material/BorderColor";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderOpen from "@mui/icons-material/FolderOpen";
import Forum from "@mui/icons-material/Forum";
import MenuIcon from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
	const drawerWidthOpen = 300;
	const paddingIconButton = 10;
	const marginIconButton = 14;
	const iconFontSize = 20;
	const drawerWidthClose = (paddingIconButton + marginIconButton) * 2 + iconFontSize;

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [usersOpen, setUsersOpen] = useState(false);

	const navigate = useNavigate();
	const theme = useTheme();

	function toggleDrawerOpen() {
		setDrawerOpen(!drawerOpen);
	}

	function toggleUsersOpen() {
		setUsersOpen(!usersOpen);
	}

	function handleStudents() {
		navigate("/students");
	}

	function handleTeachers() {
		navigate("/teachers");
	}

	const navList = [
		{
			icon: DashboardOutlined,
			desc: "Dashboard",
			secondDesc: "",
			badge: 0,
			subList: [],
		},
		{
			icon: Person,
			desc: "Users",
			secondDesc: "",
			badge: 0,
			subList: [],
		},
		{
			icon: Forum,
			desc: "Forum",
			secondDesc: "Message from andi",
			badge: 0,
			subList: [
				{
					desc: "chat",
					badge: 2,
				},
				{
					desc: "reminder",
					badge: 0,
				},
			],
		},
		{
			icon: Analytics,
			desc: "Analytics",
			secondDesc: "",
			badge: 0,
			subList: [],
		},
		{
			icon: FolderOpen,
			desc: "Folder",
			secondDesc: "",
			badge: 0,
			subList: [],
		},
		{
			icon: BorderColor,
			desc: "Edit",
			secondDesc: "",
			badge: 0,
			subList: [],
		},
	];

	const drawerContent = (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					height: "42px",
					width: "auto",
					backgroundColor: "transparent",
					margin: "14px 14px",
					padding: "12px 0px",
					borderBottom: "1px solid lightgray",
					alignItems: "flex-end",
				}}>
				<Typography
					variant="h1"
					noWrap={true}
					gutterBottom
					sx={{
						display: drawerOpen ? "initial" : "none",
						fontSize: "18px",
						fontWeight: 600,
						color: "white",
						width: "154px",
						marginLeft: drawerOpen ? "0px" : "8px",
						paddingBottom: "3px",
					}}>
					Questech
				</Typography>

				<Button
					onClick={toggleDrawerOpen}
					sx={{
						minWidth: "initial",
						padding: "10px",
						borderRadius: "8px",
						backgroundColor: drawerOpen ? "transparent" : "transparent",
						"&:hover": {
							backgroundColor: "#26284687",
						},
					}}>
					<MenuIcon sx={{ fontSize: "20px", color: "white" }}></MenuIcon>
				</Button>
			</Box>

			<List dense={true}>
				{navList.map((key, index) => (
					<>
						<Tooltip
							title={!drawerOpen ? key.desc : ""}
							placement={"right"}
							componentsProps={{
								tooltip: {
									sx: {
										backgroundColor: "gray",
										color: "white",
										marginLeft: "22px !important",
										boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
									},
								},
							}}>
							{index === 1 ? (
								<>
									<ListItemButton
										onClick={toggleUsersOpen}
										sx={{
											margin: "6px 14px",
											padding: "10px",
											borderRadius: "8px",
											"&:hover": {
												backgroundColor: "#2A3574",
											},
										}}>
										<ListItemIcon sx={{ minWidth: "46px" }}>
											<Badge badgeContent={key.badge} color="secondary" variant="dot">
												<key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
											</Badge>
										</ListItemIcon>

										<ListItemText
											primary={key.desc}
											primaryTypographyProps={{
												variant: "body2",
											}}
											sx={{
												display: "inline",
												margin: "0px",
												overflowX: "hidden",
												color: "white",
												whiteSpace: "nowrap",
												minWidth: "126px",
											}}
										/>
										{usersOpen ? (
											<ExpandLess sx={{ color: "lightgray" }} />
										) : (
											<ExpandMore sx={{ color: "lightgray" }} />
										)}
									</ListItemButton>
									<Collapse in={usersOpen} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											<ListItemButton
												onClick={handleTeachers}
												sx={{
													margin: "6px 14px",
													pl: 9,
													borderRadius: "8px",
													"&:hover": {
														backgroundColor: "#2A3574",
													},
												}}>
												<ListItemText
													primary="Teachers"
													primaryTypographyProps={{
														variant: "body2",
													}}
													sx={{
														display: "inline",
														margin: "0px",
														overflowX: "hidden",
														color: "white",
														whiteSpace: "nowrap",
														minWidth: "126px",
													}}
												/>
											</ListItemButton>
											<ListItemButton
												onClick={handleStudents}
												sx={{
													margin: "6px 14px",
													pl: 9,
													borderRadius: "8px",
													"&:hover": {
														backgroundColor: "#2A3574",
													},
												}}>
												<ListItemText
													primary="Students"
													primaryTypographyProps={{
														variant: "body2",
													}}
													sx={{
														display: "inline",
														margin: "0px",
														overflowX: "hidden",
														color: "white",
														whiteSpace: "nowrap",
														minWidth: "126px",
													}}
												/>
											</ListItemButton>
										</List>
									</Collapse>
								</>
							) : (
								<ListItemButton
									sx={{
										margin: "6px 14px",
										padding: "10px",
										borderRadius: "8px",
										"&:hover": {
											backgroundColor: "#2A3574",
										},
									}}>
									<ListItemIcon sx={{ minWidth: "46px" }}>
										<Badge badgeContent={key.badge} color="secondary" variant="dot">
											<key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
										</Badge>
									</ListItemIcon>

									<ListItemText
										primary={key.desc}
										primaryTypographyProps={{
											variant: "body2",
										}}
										sx={{
											display: "inline",
											margin: "0px",
											overflowX: "hidden",
											color: "white",
											whiteSpace: "nowrap",
											minWidth: "126px",
										}}
									/>
								</ListItemButton>
							)}
						</Tooltip>
					</>
				))}
			</List>
		</>
	);

	return (
		<Drawer
			variant="permanent"
			open={drawerOpen}
			sx={{
				width: drawerOpen ? { xs: 1, sm: drawerWidthOpen } : drawerWidthClose,
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: drawerOpen
						? theme.transitions.duration.leavingScreen
						: theme.transitions.duration.enteringScreen,
				}),
				"& .MuiDrawer-paper": {
					width: drawerOpen ? { xs: 1, sm: drawerWidthOpen } : drawerWidthClose,
					marginTop: { xs: "54px", sm: "64px" },
					overflowX: "hidden",
					gap: 5,
					borderRight: "0px",
					boxShadow: theme.shadows[8],
					backgroundColor: "#131F65",
					transition: theme.transitions.create("width", {
						easing: theme.transitions.easing.sharp,
						duration: drawerOpen
							? theme.transitions.duration.leavingScreen
							: theme.transitions.duration.enteringScreen,
					}),
				},
			}}>
			{drawerContent}
		</Drawer>
	);
}

export default Sidebar;
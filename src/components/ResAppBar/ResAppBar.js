import React from 'react';
import {
    Avatar,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Menu,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from "@material-ui/icons/Menu";
import {useState, useEffect} from "react";
import UserLogo from '../../assets/img/Userpic.jpg'

const headersData = [
    {
        label: "Design",
        href: "/design",
    },
    {
        label: "CMS",
        href: "/cms",
    },
    {
        label: "Cases",
        href: "/cases",
    },
];
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#358ed7",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
        height: '75px'
    },
    logo: {
        fontFamily: "Raleway, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    appButtonLabel: {
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'lighter',
        textTransform: 'none'
    },
    appDrawerButtonLabel: {
        color: 'black',
        fontSize: '1.1rem',
        fontWeight: 'lighter',
        textTransform: 'none'
    },
    menuButton: {
        fontFamily: "Raleway, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    drawerColor: {
        backgroundColor: '#358ed7'
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
        width: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    buttonStyle: {
        border: '1px solid #fff',
        backgroundColor: '#358ed7',
        color: '#ffff',
        marginLeft: '10px',
        marginTop: '20px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    offset: theme.mixins.toolbar,
}));
const ResAppBar = () => {
    const {
        header,
        logo,
        menuButton,
        toolbar,
        drawerContainer,
        selectEmpty,
        offset,
        buttonStyle,
        appButtonLabel,
        drawerColor,
        appDrawerButtonLabel
    } = useStyles();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openUserMenu, setOpenUserMenu] = useState(null)
    const openUser = Boolean(openUserMenu)
    const handleUserMenu = (event) => {
        setOpenUserMenu(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setOpenUserMenu(null)
    }
    const {mobileView, drawerOpen} = state;
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);
    const getMenuButtons = () => {
        return (
            <>
                <Button className='appButtonLabel' variant='text'>
                    <Typography className={appButtonLabel} variant='button'> Design</Typography>
                </Button>
                <Button variant='text'>
                    <Typography className={appButtonLabel} variant='button'>CMS</Typography>
                </Button>
                <Button variant='text'>
                    <Typography className={appButtonLabel} variant='button'>Cases</Typography>
                </Button>
                <Button variant='text'
                        aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                >
                    <Typography className={appButtonLabel} variant='button'><span>More<ExpandMoreIcon
                        onClick={handleClick}
                    /></span></Typography>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleClose}>Option 2</MenuItem>
                    <MenuItem onClick={handleClose}>Option 3</MenuItem>
                </Menu>
            </>
        );
    }
    const displayDesktop = () => {
        return (
            <>
                <Toolbar className={toolbar}>
                    <div>{getMenuButtons()}</div>
                    {femmecubatorLogo}
                </Toolbar>
                <div className={offset}/>
            </>

        );
    };
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon/>
                </IconButton>

                <Drawer
                    className={drawerColor}
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>
                        {getDrawerChoices()}
                        <Menu
                            id="basic-menu"
                            anchorEl={openUserMenu}
                            open={openUser}
                            onClose={handleCloseUserMenu}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Log out</MenuItem>
                        </Menu>
                    </div>
                </Drawer>

                <div>{brandLogoGoesHere}</div>
            </Toolbar>
        );
    };
    const getDrawerChoices = () => {
        return (
            <Link
                {...{

                    style: {textDecoration: "none",},
                }}
            >
                <MenuItem>
                    <Avatar onClick={handleUserMenu} src={UserLogo}/>
                </MenuItem>

                {/*<MenuItem>*/}
                {/*    <Typography className={appDrawerButtonLabel} variant='button'>My Profile</Typography>*/}
                {/*</MenuItem>*/}
                <MenuItem>
                    <Typography className={appDrawerButtonLabel} variant='button'>Design</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography className={appDrawerButtonLabel} variant='button'>CMS</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography className={appDrawerButtonLabel} variant='button'>Cases</Typography>
                </MenuItem>
                {/*<MenuItem>*/}
                {/*    <Typography className={appDrawerButtonLabel} variant='button'>Login</Typography>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                {/*    <Typography className={appDrawerButtonLabel} variant='button'>Sign</Typography>*/}
                {/*</MenuItem>*/}
            </Link>
        );
    };
    const femmecubatorLogo = (
        <div className=''>
            <Button variant='text'><Typography className={appButtonLabel} variant='button'>Login</Typography></Button>
            <Button className={buttonStyle} variant='contained'>Sign Up</Button>
        </div>

    );
    const brandLogoGoesHere = (
        <Typography variant='h6' component='h1' className={logo}>
            module
        </Typography>
    )

    return (
        <header>
            <AppBar className={header} elevation={0} position='sticky'>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
};

export default ResAppBar;
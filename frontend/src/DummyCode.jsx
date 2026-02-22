// LandingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Shield,
  Zap,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LogIn,
  UserPlus,
  Mail,
  Lock,
  User,
} from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '50K+', label: 'Prescriptions Processed', icon: Activity },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '2.5s', label: 'Avg. Billing Time', icon: Zap },
    { value: '₹12L+', label: 'Revenue Managed Daily', icon: TrendingUp },
  ];

  const features = [
    {
      category: 'Operations',
      icon: Zap,
      color: 'blue',
      items: [
        {
          title: 'Offline-First Billing',
          desc: 'Full POS works without internet, auto-syncs when online',
        },
        {
          title: 'Keyboard-First Workflow',
          desc: 'Ultra-fast billing using only keyboard shortcuts',
        },
        {
          title: 'Real-Time Stock Control',
          desc: 'Batch-level tracking with automatic expiry management',
        },
        {
          title: 'OCR Prescription Capture',
          desc: 'Scan prescriptions to auto-fill details instantly',
        },
      ],
    },
    {
      category: 'Intelligence',
      icon: BarChart3,
      color: 'purple',
      items: [
        {
          title: 'AI Demand Forecasting',
          desc: 'Predict medicine demand using sales history and trends',
        },
        {
          title: 'Dead-Stock Intelligence',
          desc: 'Identifies non-moving inventory with capital-blocked value',
        },
        {
          title: 'Profit-Ranked Suggestions',
          desc: 'High-margin alternatives highlighted during search',
        },
        {
          title: 'Local Health Trends',
          desc: 'Monitor rising diseases in your city with alerts',
        },
      ],
    },
    {
      category: 'Compliance',
      icon: Shield,
      color: 'green',
      items: [
        {
          title: 'Schedule H/H1 Compliance',
          desc: 'Automatic prescription capture and audit-ready logs',
        },
        {
          title: 'GST Intelligence',
          desc: 'Track GST paid vs recovered, flag mismatches',
        },
        {
          title: 'Role-Based Access',
          desc: 'Owner-only visibility for profits, audits, deletions',
        },
        {
          title: 'Encrypted Backups',
          desc: 'Daily automated local + cloud backups with one-click restore',
        },
      ],
    },
    {
      category: 'Customer Care',
      icon: Users,
      color: 'orange',
      items: [
        {
          title: 'WhatsApp Integration',
          desc: 'Bills, reminders, and alerts via WhatsApp',
        },
        {
          title: 'Family Safety Check',
          desc: 'Detects drug conflicts across family prescriptions',
        },
        {
          title: 'Credit Management',
          desc: 'Track customer credit with aging and settlement reminders',
        },
        {
          title: 'Health Recommendations',
          desc: 'Alternate medicines, food, yoga insights per disease',
        },
      ],
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for single pharmacy stores',
      features: [
        'Single branch access',
        'Up to 5,000 bills/month',
        'Offline billing',
        'Basic inventory management',
        'WhatsApp notifications',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: '/month',
      description: 'For growing pharmacy businesses',
      features: [
        'Up to 3 branches',
        'Unlimited billing',
        'AI demand forecasting',
        'Advanced analytics',
        'GST intelligence',
        'Priority support',
        'Multi-user access',
        'Custom reports',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For pharmacy chains and networks',
      features: [
        'Unlimited branches',
        'White-label option',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'On-premise deployment',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Owner, MediCare Pharmacy, Delhi',
      content:
        'Reduced billing time by 60% and recovered ₹2.3L in near-expiry stock in just 3 months.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Manager, HealthPlus Chain, Mumbai',
      content:
        'The offline-first approach saved us during internet outages. Never missed a single sale.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Owner, City Pharmacy, Ahmedabad',
      content:
        'AI forecasting helped us reduce dead stock by 40%. The ROI was visible within weeks.',
      rating: 5,
    },
  ];

  const filteredFeatures =
    activeTab === 'all'
      ? features
      : features.filter((f) => f.category.toLowerCase() === activeTab);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredFeatures.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === filteredFeatures.length - 1 ? 0 : prev + 1
    );
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth submitted:', authMode);
    setShowAuthModal(false);
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background:
        'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f8fafc 100%)',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    navbar: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
    },
    logoText: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoTitle: {
      fontSize: '24px',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: 0,
    },
    logoSubtitle: {
      fontSize: '12px',
      color: '#64748b',
      marginTop: '-4px',
    },
    desktopMenu: {
      display: 'none',
      alignItems: 'center',
      gap: '32px',
    },
    desktopMenuVisible: {
      display: 'flex',
    },
    navLink: {
      color: '#334155',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.2s',
    },
    authButtons: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    btnLogin: {
      padding: '8px 20px',
      background: 'transparent',
      color: '#334155',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
    },
    mobileMenuBtn: {
      display: 'block',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
    },
    mobileMenu: {
      background: 'white',
      borderTop: '1px solid #e2e8f0',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    btnPrimary: {
      padding: '10px 24px',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    btnSecondary: {
      padding: '10px 24px',
      background: 'white',
      color: '#334155',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    btnLarge: {
      padding: '16px 32px',
      fontSize: '18px',
      borderRadius: '12px',
    },
    heroSection: {
      padding: '128px 1rem 80px',
    },
    heroGrid: {
      display: 'grid',
      gap: '48px',
      alignItems: 'center',
      gridTemplateColumns: '1fr',
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#dbeafe',
      color: '#1e40af',
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '500',
      width: 'fit-content',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#0f172a',
      lineHeight: '1.2',
      margin: 0,
    },
    gradientText: {
      display: 'block',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroDescription: {
      fontSize: '20px',
      color: '#475569',
      lineHeight: '1.6',
      margin: 0,
    },
    heroButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    socialProof: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      paddingTop: '16px',
    },
    avatars: {
      display: 'flex',
      marginLeft: '-12px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)',
      border: '2px solid white',
      marginLeft: '-12px',
    },
    stars: {
      display: 'flex',
      gap: '4px',
    },
    dashboardCard: {
      position: 'relative',
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
    },
    dashboardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '24px',
    },
    liveIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    pulseDot: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      animation: 'pulse 2s infinite',
    },
    dashboardStats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginBottom: '24px',
    },
    statCard: {
      padding: '16px',
      borderRadius: '12px',
    },
    statCardBlue: {
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    },
    statCardPurple: {
      background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    },
    alertCard: {
      background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '24px',
    },
    alertHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
    alertBadge: {
      padding: '4px 8px',
      background: '#fed7aa',
      color: '#c2410c',
      fontSize: '12px',
      borderRadius: '9999px',
      fontWeight: '500',
    },
    progressBar: {
      width: '100%',
      height: '6px',
      background: '#fed7aa',
      borderRadius: '9999px',
      overflow: 'hidden',
      marginTop: '8px',
    },
    progressFill: {
      height: '100%',
      background: '#f97316',
      borderRadius: '9999px',
      width: '60%',
    },
    dashboardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '16px',
      borderTop: '1px solid #e2e8f0',
    },
    statsSection: {
      padding: '64px 1rem',
      background: 'white',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '32px',
    },
    statItem: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
    },
    statIcon: {
      width: '56px',
      height: '56px',
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      borderRadius: '12px',
      color: '#2563eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#0f172a',
      margin: 0,
    },
    statText: {
      fontSize: '14px',
      color: '#64748b',
      margin: 0,
    },
    featuresSection: {
      padding: '80px 1rem',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '64px',
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '16px',
    },
    sectionDescription: {
      fontSize: '20px',
      color: '#64748b',
      maxWidth: '768px',
      margin: '0 auto',
    },
    featureTabs: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '48px',
    },
    tabButton: {
      padding: '10px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      border: '1px solid #e2e8f0',
      background: 'white',
      color: '#334155',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    tabButtonActive: {
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      color: 'white',
      border: 'none',
      boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
    },
    sliderContainer: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
    },
    sliderWrapper: {
      overflow: 'hidden',
      borderRadius: '16px',
    },
    sliderTrack: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(-${currentSlide * 100}%)`,
    },
    featureCard: {
      minWidth: '100%',
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
    },
    featureHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
    },
    featureIcon: {
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    },
    featureIconBlue: {
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
    },
    featureIconPurple: {
      background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
    },
    featureIconGreen: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    featureIconOrange: {
      background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    },
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    featureItem: {
      display: 'flex',
      gap: '12px',
    },
    checkIcon: {
      color: '#10b981',
      flexShrink: 0,
      marginTop: '2px',
    },
    featureTitle: {
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: '4px',
      margin: 0,
    },
    featureDesc: {
      fontSize: '14px',
      color: '#64748b',
      margin: 0,
    },
    sliderNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '48px',
      height: '48px',
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      zIndex: 10,
    },
    sliderNavLeft: {
      left: '-24px',
    },
    sliderNavRight: {
      right: '-24px',
    },
    sliderDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '24px',
    },
    sliderDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#e2e8f0',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    sliderDotActive: {
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      width: '32px',
      borderRadius: '5px',
    },
    pricingSection: {
      padding: '80px 1rem',
      background: 'white',
    },
    pricingGrid: {
      display: 'grid',
      gap: '32px',
      marginBottom: '48px',
      gridTemplateColumns: '1fr',
    },
    pricingCard: {
      position: 'relative',
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      border: '2px solid #e2e8f0',
    },
    pricingCardPopular: {
      borderColor: '#2563eb',
      boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.2)',
      transform: 'scale(1.02)',
    },
    popularBadge: {
      position: 'absolute',
      top: '-16px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '600',
      boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
    },
    pricingHeader: {
      textAlign: 'center',
      marginBottom: '32px',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    price: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#0f172a',
    },
    period: {
      color: '#64748b',
      marginLeft: '8px',
      marginBottom: '8px',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '32px',
    },
    featuresListItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      color: '#334155',
    },
    testimonialsSection: {
      padding: '80px 1rem',
    },
    testimonialsGrid: {
      display: 'grid',
      gap: '32px',
      gridTemplateColumns: '1fr',
    },
    testimonialCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
    },
    ctaSection: {
      padding: '80px 1rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
    },
    ctaContent: {
      maxWidth: '896px',
      margin: '0 auto',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: '700',
      color: 'white',
      marginBottom: '24px',
    },
    ctaDescription: {
      fontSize: '20px',
      color: '#bfdbfe',
      marginBottom: '32px',
    },
    ctaButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    btnWhite: {
      padding: '16px 32px',
      background: 'white',
      color: '#2563eb',
      border: 'none',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '18px',
      cursor: 'pointer',
    },
    btnOutline: {
      padding: '16px 32px',
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '18px',
      cursor: 'pointer',
    },
    footer: {
      background: '#0f172a',
      color: '#cbd5e1',
      padding: '48px 1rem',
    },
    footerGrid: {
      display: 'grid',
      gap: '32px',
      marginBottom: '32px',
      gridTemplateColumns: '1fr',
    },
    footerBrand: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    footerLink: {
      fontSize: '14px',
      color: '#cbd5e1',
      textDecoration: 'none',
    },
    footerBottom: {
      borderTop: '1px solid #334155',
      paddingTop: '32px',
      textAlign: 'center',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '1rem',
    },
    modalContent: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      maxWidth: '450px',
      width: '100%',
      position: 'relative',
    },
    modalClose: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      color: '#64748b',
    },
    modalTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '8px',
    },
    modalSubtitle: {
      fontSize: '14px',
      color: '#64748b',
      marginBottom: '24px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#334155',
      marginBottom: '8px',
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      color: '#64748b',
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'all 0.2s',
      outline: 'none',
    },
    switchMode: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: '#64748b',
    },
    switchLink: {
      color: '#2563eb',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  // Media query styles
  const mediaStyles = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @media (min-width: 768px) {
      .desktop-menu { display: flex !important; }
      .mobile-menu-btn { display: none !important; }
      .hero-grid { grid-template-columns: 1fr 1fr !important; }
      .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
      .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .footer-grid { grid-template-columns: repeat(4, 1fr) !important; }
      .hero-buttons { flex-direction: row !important; }
      .cta-buttons { flex-direction: row !important; }
    }
    @media (min-width: 1024px) {
      .hero-title { font-size: 60px !important; }
      .section-title { font-size: 48px !important; }
      .cta-title { font-size: 48px !important; }
      .stat-number { font-size: 48px !important; }
    }
    input:focus {
      border-color: #2563eb !important;
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <div style={styles.page}>
        {/* Navigation */}
        <nav style={styles.navbar}>
          <div style={styles.container}>
            <div style={styles.navContent}>
              <div style={styles.logoSection}>
                <div style={styles.logoIcon}>
                  <Activity size={28} strokeWidth={2.5} />
                </div>
                <div style={styles.logoText}>
                  <h1 style={styles.logoTitle}>Sanjeevani</h1>
                  <p style={styles.logoSubtitle}>Pharmacy Manager</p>
                </div>
              </div>

              <div
                className="desktop-menu"
                style={{ ...styles.desktopMenu, ...styles.desktopMenuVisible }}
              >
                <a href="#features" style={styles.navLink}>
                  Features
                </a>
                <a href="#pricing" style={styles.navLink}>
                  Pricing
                </a>
                <a href="#testimonials" style={styles.navLink}>
                  Testimonials
                </a>
                <div style={styles.authButtons}>
                  <button
                    style={styles.btnLogin}
                    onClick={() => {
                      setAuthMode('login');
                      setShowAuthModal(true);
                    }}
                  >
                    <LogIn size={16} />
                    Login
                  </button>
                  <button
                    style={styles.btnPrimary}
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                    }}
                  >
                    <UserPlus size={16} />
                    Sign Up
                  </button>
                </div>
              </div>

              <button
                className="mobile-menu-btn"
                style={styles.mobileMenuBtn}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div style={styles.mobileMenu}>
              <a href="#features" style={styles.navLink}>
                Features
              </a>
              <a href="#pricing" style={styles.navLink}>
                Pricing
              </a>
              <a href="#testimonials" style={styles.navLink}>
                Testimonials
              </a>
              <button
                style={{
                  ...styles.btnLogin,
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                <LogIn size={16} />
                Login
              </button>
              <button
                style={{
                  ...styles.btnPrimary,
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setAuthMode('signup');
                  setShowAuthModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                <UserPlus size={16} />
                Sign Up
              </button>
            </div>
          )}
        </nav>

        {/* Auth Modal */}
        {showAuthModal && (
          <div
            style={styles.modalOverlay}
            onClick={() => setShowAuthModal(false)}
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.modalClose}
                onClick={() => setShowAuthModal(false)}
              >
                <X size={24} />
              </button>

              <h2 style={styles.modalTitle}>
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p style={styles.modalSubtitle}>
                {authMode === 'login'
                  ? 'Login to access your pharmacy dashboard'
                  : 'Sign up to start your 30-day free trial'}
              </p>

              <form onSubmit={handleAuthSubmit}>
                {authMode === 'signup' && (
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name</label>
                    <div style={styles.inputWrapper}>
                      <User size={18} style={styles.inputIcon} />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>
                )}

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address</label>
                  <div style={styles.inputWrapper}>
                    <Mail size={18} style={styles.inputIcon} />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      style={styles.input}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Password</label>
                  <div style={styles.inputWrapper}>
                    <Lock size={18} style={styles.inputIcon} />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      style={styles.input}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    ...styles.btnPrimary,
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    fontSize: '16px',
                  }}
                >
                  {authMode === 'login' ? 'Login' : 'Create Account'}
                </button>

                <div style={styles.switchMode}>
                  {authMode === 'login' ? (
                    <>
                      Don't have an account?{' '}
                      <span
                        style={styles.switchLink}
                        onClick={() => setAuthMode('signup')}
                      >
                        Sign up
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <span
                        style={styles.switchLink}
                        onClick={() => setAuthMode('login')}
                      >
                        Login
                      </span>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.container}>
            <div className="hero-grid" style={styles.heroGrid}>
              <div style={styles.heroContent}>
                <div style={styles.badge}>
                  <Zap size={16} />
                  <span>India's Most Advanced Pharmacy Software</span>
                </div>

                <h1 style={styles.heroTitle} className="hero-title">
                  Run Your Pharmacy
                  <span style={styles.gradientText}>Smarter & Faster</span>
                </h1>

                <p style={styles.heroDescription}>
                  Offline-first billing, AI-powered inventory, and compliance
                  automation. Built for Indian pharmacies, trusted by thousands.
                </p>

                <div className="hero-buttons" style={styles.heroButtons}>
                  <button
                    style={{ ...styles.btnPrimary, ...styles.btnLarge }}
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                    }}
                  >
                    <span>Start 30-Day Free Trial</span>
                    <ArrowRight size={20} />
                  </button>
                  <button
                    style={{ ...styles.btnSecondary, ...styles.btnLarge }}
                  >
                    Watch Demo
                  </button>
                </div>

                <div style={styles.socialProof}>
                  <div style={styles.avatars}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} style={styles.avatar}></div>
                    ))}
                  </div>
                  <div>
                    <div style={styles.stars}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#fbbf24"
                          color="#fbbf24"
                        />
                      ))}
                    </div>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#64748b',
                        marginTop: '4px',
                      }}
                    >
                      Trusted by 2,500+ pharmacies
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div style={styles.dashboardCard}>
                  <div style={styles.dashboardHeader}>
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#64748b',
                      }}
                    >
                      Live Dashboard
                    </span>
                    <div style={styles.liveIndicator}>
                      <div style={styles.pulseDot}></div>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>
                        Real-time
                      </span>
                    </div>
                  </div>

                  <div style={styles.dashboardStats}>
                    <div style={{ ...styles.statCard, ...styles.statCardBlue }}>
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#64748b',
                          marginBottom: '4px',
                        }}
                      >
                        Today's Sales
                      </p>
                      <p
                        style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#0f172a',
                          margin: 0,
                        }}
                      >
                        ₹45,230
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#10b981',
                          marginTop: '4px',
                        }}
                      >
                        ↑ 12% vs yesterday
                      </p>
                    </div>
                    <div
                      style={{ ...styles.statCard, ...styles.statCardPurple }}
                    >
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#64748b',
                          marginBottom: '4px',
                        }}
                      >
                        Profit Margin
                      </p>
                      <p
                        style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#0f172a',
                          margin: 0,
                        }}
                      >
                        18.5%
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#10b981',
                          marginTop: '4px',
                        }}
                      >
                        ↑ 2.3% this month
                      </p>
                    </div>
                  </div>

                  <div style={styles.alertCard}>
                    <div style={styles.alertHeader}>
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#334155',
                          margin: 0,
                        }}
                      >
                        Near Expiry Alert
                      </p>
                      <span style={styles.alertBadge}>3 items</span>
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '14px',
                        }}
                      >
                        <span style={{ color: '#64748b' }}>
                          Paracetamol 500mg
                        </span>
                        <span style={{ color: '#0f172a', fontWeight: '500' }}>
                          45 days
                        </span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={styles.progressFill}></div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.dashboardFooter}>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>
                      Stock Value
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#0f172a',
                      }}
                    >
                      ₹8.2L
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div style={styles.container}>
            <div className="stats-grid" style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statItem}>
                  <div style={styles.statIcon}>
                    <stat.icon size={28} />
                  </div>
                  <p className="stat-number" style={styles.statNumber}>
                    {stat.value}
                  </p>
                  <p style={styles.statText}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Slider */}
        <section id="features" style={styles.featuresSection}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 className="section-title" style={styles.sectionTitle}>
                Everything You Need to
                <span style={styles.gradientText}>Succeed & Scale</span>
              </h2>
              <p style={styles.sectionDescription}>
                Powerful features designed specifically for Indian pharmacy
                operations
              </p>
            </div>

            <div style={styles.featureTabs}>
              {[
                'all',
                'operations',
                'intelligence',
                'compliance',
                'customer care',
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentSlide(0);
                  }}
                  style={
                    activeTab === tab
                      ? { ...styles.tabButton, ...styles.tabButtonActive }
                      : styles.tabButton
                  }
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div style={styles.sliderContainer}>
              <button
                style={{ ...styles.sliderNav, ...styles.sliderNavLeft }}
                onClick={handlePrevSlide}
              >
                <ChevronLeft size={24} color="#334155" />
              </button>

              <div style={styles.sliderWrapper}>
                <div style={styles.sliderTrack} ref={sliderRef}>
                  {filteredFeatures.map((feature, index) => (
                    <div key={index} style={styles.featureCard}>
                      <div style={styles.featureHeader}>
                        <div
                          style={{
                            ...styles.featureIcon,
                            ...(feature.color === 'blue'
                              ? styles.featureIconBlue
                              : feature.color === 'purple'
                              ? styles.featureIconPurple
                              : feature.color === 'green'
                              ? styles.featureIconGreen
                              : styles.featureIconOrange),
                          }}
                        >
                          <feature.icon size={28} />
                        </div>
                        <h3
                          style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#0f172a',
                            margin: 0,
                          }}
                        >
                          {feature.category}
                        </h3>
                      </div>
                      <div style={styles.featureList}>
                        {feature.items.map((item, idx) => (
                          <div key={idx} style={styles.featureItem}>
                            <CheckCircle size={20} style={styles.checkIcon} />
                            <div>
                              <p style={styles.featureTitle}>{item.title}</p>
                              <p style={styles.featureDesc}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                style={{ ...styles.sliderNav, ...styles.sliderNavRight }}
                onClick={handleNextSlide}
              >
                <ChevronRight size={24} color="#334155" />
              </button>

              <div style={styles.sliderDots}>
                {filteredFeatures.map((_, index) => (
                  <div
                    key={index}
                    style={
                      currentSlide === index
                        ? { ...styles.sliderDot, ...styles.sliderDotActive }
                        : styles.sliderDot
                    }
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={styles.pricingSection}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Simple, Transparent Pricing</h2>
              <p style={styles.sectionDescription}>
                Choose the plan that fits your pharmacy's needs
              </p>
            </div>

            <div className="pricing-grid" style={styles.pricingGrid}>
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  style={
                    plan.popular
                      ? { ...styles.pricingCard, ...styles.pricingCardPopular }
                      : styles.pricingCard
                  }
                >
                  {plan.popular && (
                    <div style={styles.popularBadge}>Most Popular</div>
                  )}

                  <div style={styles.pricingHeader}>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#0f172a',
                        marginBottom: '8px',
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '14px',
                        marginBottom: '24px',
                      }}
                    >
                      {plan.description}
                    </p>
                    <div style={styles.priceContainer}>
                      <span style={styles.price}>{plan.price}</span>
                      <span style={styles.period}>{plan.period}</span>
                    </div>
                  </div>

                  <ul style={styles.featuresList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={styles.featuresListItem}>
                        <CheckCircle
                          size={20}
                          style={{
                            color: '#10b981',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={
                      plan.popular
                        ? {
                            ...styles.btnPrimary,
                            width: '100%',
                            justifyContent: 'center',
                            padding: '14px',
                          }
                        : {
                            ...styles.btnSecondary,
                            width: '100%',
                            justifyContent: 'center',
                            padding: '14px',
                          }
                    }
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: '#64748b' }}>
              All plans include 30-day free trial • No credit card required •
              Cancel anytime
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={styles.testimonialsSection}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Loved by Pharmacy Owners</h2>
              <p style={styles.sectionDescription}>
                See what our customers have to say
              </p>
            </div>

            <div className="testimonials-grid" style={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={styles.testimonialCard}>
                  <div style={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <p
                    style={{
                      color: '#334155',
                      lineHeight: '1.6',
                      margin: '16px 0 24px',
                    }}
                  >
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p
                      style={{ fontWeight: '600', color: '#0f172a', margin: 0 }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#64748b',
                        marginTop: '4px',
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <div style={styles.ctaContent}>
              <h2 className="cta-title" style={styles.ctaTitle}>
                Ready to Transform Your Pharmacy?
              </h2>
              <p style={styles.ctaDescription}>
                Join 2,500+ pharmacies already using Sanjeevani to grow their
                business
              </p>
              <div className="cta-buttons" style={styles.ctaButtons}>
                <button
                  style={styles.btnWhite}
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                >
                  Start Free Trial
                </button>
                <button style={styles.btnOutline}>Schedule Demo</button>
              </div>
              <p style={{ color: '#bfdbfe' }}>
                No credit card required • Setup in 5 minutes • Free migration
                support
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.container}>
            <div className="footer-grid" style={styles.footerGrid}>
              <div style={styles.footerBrand}>
                <div style={styles.footerLogo}>
                  <div
                    style={{
                      ...styles.logoIcon,
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    <Activity size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'white',
                    }}
                  >
                    Sanjeevani
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                  India's most advanced pharmacy management software
                </p>
              </div>

              <div style={styles.footerLinks}>
                <h4
                  style={{
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  Product
                </h4>
                <a href="#" style={styles.footerLink}>
                  Features
                </a>
                <a href="#" style={styles.footerLink}>
                  Pricing
                </a>
                <a href="#" style={styles.footerLink}>
                  Demo
                </a>
                <a href="#" style={styles.footerLink}>
                  Updates
                </a>
              </div>

              <div style={styles.footerLinks}>
                <h4
                  style={{
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  Company
                </h4>
                <a href="#" style={styles.footerLink}>
                  About Us
                </a>
                <a href="#" style={styles.footerLink}>
                  Contact
                </a>
                <a href="#" style={styles.footerLink}>
                  Careers
                </a>
                <a href="#" style={styles.footerLink}>
                  Blog
                </a>
              </div>

              <div style={styles.footerLinks}>
                <h4
                  style={{
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  Support
                </h4>
                <a href="#" style={styles.footerLink}>
                  Help Center
                </a>
                <a href="#" style={styles.footerLink}>
                  Documentation
                </a>
                <a href="#" style={styles.footerLink}>
                  Privacy Policy
                </a>
                <a href="#" style={styles.footerLink}>
                  Terms of Service
                </a>
              </div>
            </div>

            <div style={styles.footerBottom}>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                © 2024 Sanjeevani Pharmacy Manager. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;

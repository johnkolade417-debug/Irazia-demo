import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { SheerIllusionSlider } from './components/SheerIllusionSlider';
import { WarmthSelector } from './components/WarmthSelector';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ShadeFinderModal } from './components/ShadeFinderModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { MysteryCreditWidget } from './components/MysteryCreditWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';
import { Product, CartItem } from './types';
import { PRODUCTS, WARMTH_LEVELS } from './data/storeData';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-1',
      productId: 'fleece-leggings',
      title: 'Sheer Illusion Fleece-Lined Tights',
      price: 34,
      image: 'https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_30.jpg',
      quantity: 1,
      selectedColor: 'Vanilla (Light)',
      selectedSize: 'XS/S (2-6)',
      selectedWarmth: 'Cozy Fleece (220g)'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShadeFinderOpen, setIsShadeFinderOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [checkoutCode, setCheckoutCode] = useState('');
  const [policyModal, setPolicyModal] = useState({ isOpen: false, title: '', content: '' });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (
    product: Product,
    color?: string,
    size?: string,
    warmth?: string
  ) => {
    const chosenColor = color || (product.colors && product.colors[0]?.name);
    const chosenSize = size || (product.sizes && product.sizes[0]);
    const chosenWarmth = warmth || (product.warmthLevels && product.warmthLevels[1]?.label);

    const existingIdx = cartItems.findIndex(
      (item) =>
        item.productId === product.id &&
        item.selectedColor === chosenColor &&
        item.selectedSize === chosenSize &&
        item.selectedWarmth === chosenWarmth
    );

    if (existingIdx > -1) {
      const updated = [...cartItems];
      updated[existingIdx].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        selectedColor: chosenColor,
        selectedSize: chosenSize,
        selectedWarmth: chosenWarmth
      };
      setCartItems((prev) => [...prev, newItem]);
    }

    showToast(`Added "${product.title}" to your bag!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Flagship Sheer Tights Quick Buy
  const handleQuickBuyFlagship = () => {
    const flagship = PRODUCTS[0];
    setQuickViewProduct(flagship);
  };

  // From Warmth Selector directly
  const handleSelectWarmthAndBuy = (warmthId: string) => {
    const flagship = PRODUCTS[0];
    const warmthObj = WARMTH_LEVELS.find((w) => w.id === warmthId);
    handleAddToCart(
      flagship,
      'Vanilla (Light)',
      'XS/S (2-6)',
      warmthObj ? `${warmthObj.label} (${warmthObj.weight})` : undefined
    );
  };

  // From Shade Finder
  const handleSelectShadeFromModal = (shadeName: string, sizeName: string) => {
    const flagship = PRODUCTS[0];
    handleAddToCart(flagship, shadeName, sizeName, 'Cozy Fleece (220g)');
  };

  const handleProceedToCheckout = (discountAmt: number, code: string) => {
    setCheckoutDiscount(discountAmt);
    setCheckoutCode(code);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
  };

  const handleOpenPolicy = (title: string, content: string) => {
    setPolicyModal({ isOpen: true, title, content });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      {/* Top Announcement Bar */}
      <AnnouncementBar onCtaClick={handleQuickBuyFlagship} />

      {/* High-Contrast 3-Zone Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenShadeFinder={() => setIsShadeFinderOpen(true)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenShadeFinder={() => setIsShadeFinderOpen(true)}
      />

      {/* Main Storefront Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={handleQuickBuyFlagship}
          onExploreWarmth={() => {
            document.getElementById('warmth-selector')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive Before / After Sheer Illusion Slider (Demo Wow-Factor) */}
        <SheerIllusionSlider onShopClick={handleQuickBuyFlagship} />

        {/* Featured Products Showcase Grid */}
        <ProductShowcase
          onQuickView={(p) => setQuickViewProduct(p)}
          onQuickAdd={(p, color, size, warmth) => handleAddToCart(p, color, size, warmth)}
        />

        {/* Interactive Fleece Warmth Selector (Demo Wow-Factor) */}
        <WarmthSelector onSelectWarmthAndBuy={handleSelectWarmthAndBuy} />

        {/* Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* Real Scraped FAQs Accordion */}
        <FaqSection />
      </main>

      {/* Storefront Footer */}
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Clean Collapsible Mystery Credit Widget (Replaces intrusive vertical badge!) */}
      <MysteryCreditWidget
        onApplyCode={(code) => {
          showToast(`Applied code ${code}! 20% discount unlocked in your bag.`);
          setIsCartOpen(true);
        }}
      />

      {/* Sticky Mobile Bottom Bar (Under 15% Viewport Cap) */}
      <MobileBottomBar onQuickBuy={handleQuickBuyFlagship} />

      {/* Quick View / Customization Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Interactive Shade Finder Modal */}
      <ShadeFinderModal
        isOpen={isShadeFinderOpen}
        onClose={() => setIsShadeFinderOpen(false)}
        onSelectShade={handleSelectShadeFromModal}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Seamless Checkout & Order Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountAmount={checkoutDiscount}
        discountCode={checkoutCode}
        onOrderComplete={handleOrderComplete}
      />

      {/* Policy Reader Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() => setPolicyModal({ isOpen: false, title: '', content: '' })}
        title={policyModal.title}
        content={policyModal.content}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-neutral-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-neutral-700 animate-in slide-in-from-top-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

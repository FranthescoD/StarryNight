// Starry Night App Logic - Bluesky x Pinterest (Cosmic Edition)

const INITIAL_POSTS = [
    {
        id: 'post-1',
        author: { name: 'Elena Rostova', handle: 'elena.art.bsky.social', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 1000, dominant_color: '#0d1117',
        text: 'Exploring oil painting textures today under the starry night sky. Light and shadow interplay in this studio corner. 🎨✨ #art #space #creative',
        tags: ['art', 'space', 'creative', 'painting'], likes: 342, reposts: 89, isLiked: false, isReposted: false, isSensitive: false, feedType: 'discover',
        comments: [{ author: 'Marcus', handle: 'marcus.bsky.social', text: 'Stunning cosmic work!' }], activity: [{ type: 'repost', author: 'Sophie Vallee', handle: 'sophie.bsky.social' }]
    },
    {
        id: 'post-2',
        author: { name: 'Kenji Sato', handle: 'kenji.photo.bsky.social', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 533, dominant_color: '#090d16',
        text: 'Early morning mist over the alpine lake reflecting the starry night. Woke up at 4 AM for this shot. 🏔️✨ #nature #photography #space',
        tags: ['nature', 'photography', 'space', 'landscape'], likes: 1250, reposts: 310, isLiked: true, isReposted: false, isSensitive: false, feedType: 'photography',
        comments: [{ author: 'Lucas', handle: 'lucas.bsky.social', text: 'Breathtaking capture!' }], activity: []
    },
    {
        id: 'post-3',
        author: { name: 'Yuki Tanaka', handle: 'yuki.anime.bsky.social', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 1200, dominant_color: '#111026',
        text: 'Cyberpunk rainy alleyway concept study beneath neon constellations. 🌧️🌠 #anime #art #cyberpunk',
        tags: ['anime', 'art', 'cyberpunk', 'neon'], likes: 890, reposts: 215, isLiked: false, isReposted: true, isSensitive: false, feedType: 'trending',
        comments: [], activity: []
    },
    {
        id: 'post-4',
        author: { name: 'Whiskers & Paws', handle: 'cats.bsky.social', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 800, dominant_color: '#0d1117',
        text: 'Simba dreaming of chasing shooting stars during the midnight coding session. 🐈✨ #cats #space #cute',
        tags: ['cats', 'space', 'cute', 'pets'], likes: 2430, reposts: 680, isLiked: true, isReposted: true, isSensitive: false, feedType: 'trending',
        comments: [{ author: 'Mia', handle: 'mia.bsky.social', text: 'Celestial kitty!!' }], activity: []
    },
    {
        id: 'post-5',
        author: { name: 'Astraea Space', handle: 'astraea.cosmos.bsky.social', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 1050, dominant_color: '#080d1a',
        text: 'Deep space satellite imagery capturing glowing spiral nebula activity. 🌌🛰️ #space #astronomy #science',
        tags: ['space', 'astronomy', 'science', 'photography'], likes: 3120, reposts: 940, isLiked: false, isReposted: false, isSensitive: false, feedType: 'discover',
        comments: [{ author: 'Nova', handle: 'nova.bsky.social', text: 'Awe inspiring depth!' }], activity: []
    },
    {
        id: 'post-6',
        author: { name: 'Oliver Vance', handle: 'oliver.design.bsky.social', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 1150, dominant_color: '#0f172a',
        text: 'Golden twilight forest canopy looking up into clear night constellations. 🌲✨ #nature #photography #space',
        tags: ['nature', 'photography', 'space'], likes: 1840, reposts: 420, isLiked: false, isReposted: false, isSensitive: false, feedType: 'photography',
        comments: [], activity: []
    },
    {
        id: 'post-7',
        author: { name: 'Studio Orion', handle: 'orion.art.bsky.social', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 950, dominant_color: '#1e1b4b',
        text: 'Fluid acrylic paint experiment representing galaxy collisions and cosmic dust. 🎨💫 #art #abstract #space',
        tags: ['art', 'abstract', 'space', 'design'], likes: 2150, reposts: 580, isLiked: true, isReposted: false, isSensitive: false, feedType: 'trending',
        comments: [], activity: []
    },
    {
        id: 'post-8',
        author: { name: 'Luna Park', handle: 'luna.nsfw.bsky.social', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
        image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80',
        width: 800, height: 1000, dominant_color: '#2a0a18',
        text: 'Late night artistic silhouette aesthetic study under moonlight. 🌙✨ #art #sensitive #nsfw',
        tags: ['art', 'nsfw', 'sensitive'], likes: 1420, reposts: 310, isLiked: false, isReposted: false, isSensitive: true, feedType: 'discover',
        comments: [], activity: []
    }
];

const MOCK_BATCHES = [
    [
        { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', w: 800, h: 600, tag: 'photography', text: 'Crystal clear turquoise waves under a breathtaking twilight constellation. 🌊🌠 #photography #space' },
        { url: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80', w: 800, h: 800, tag: 'design', text: 'Minimalist architecture geometry against a starry midnight sky. 🏛️✨ #design #architecture' },
        { url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80', w: 800, h: 1050, tag: 'cats', text: 'Cozy night dreaming among the stars. 🐾💤 #cats #space' },
        { url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', w: 800, h: 1100, tag: 'space', text: 'Hubble deep space field view showing vibrant distant galaxies. 🔭🌌 #space #astronomy' }
    ],
    [
        { url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80', w: 800, h: 1200, tag: 'nature', text: 'Snow-capped mountain peaks illuminated by the glowing Milky Way galaxy. 🏔️🌌 #nature #photography' },
        { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80', w: 800, h: 700, tag: 'photography', text: 'Quiet desert dunes sleeping under starry skies. 🌵🌠 #photography #landscape' },
        { url: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=800&auto=format&fit=crop&q=80', w: 800, h: 1000, tag: 'art', text: 'Digital fantasy painting of cosmic dragons in a star cluster. 🐉✨ #art #anime' },
        { url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80', w: 800, h: 900, tag: 'anime', text: 'Starry night skyline digital illustration with neon lanterns. 🏮🎆 #anime #art' }
    ]
];

let state = {
    posts: [...INITIAL_POSTS],
    currentFeed: 'discover',
    currentFeedUri: null,
    currentTag: 'all',
    searchQuery: '',
    nsfwMode: 'blur', // 'blur' | 'hide' | 'show'
    darkMode: true,
    revealedSensitiveIds: new Set(),
    activeModalPost: null,
    currentUserHandle: null,
    accessJwt: null,
    cursor: null,
    isLoadingMore: false,
    savedFeeds: [],
    mockPageIndex: 0
};

const feedGrid = document.getElementById('feedGrid');
const emptyState = document.getElementById('emptyState');
const scrollSentinel = document.getElementById('scrollSentinel');
const searchInput = document.getElementById('searchInput');
const nsfwStateSelect = document.getElementById('nsfwStateSelect');
const darkModeToggle = document.getElementById('darkModeToggle');
const feedSelect = document.getElementById('feedSelect');
const categoryChipsContainer = document.getElementById('categoryChipsContainer');
const stickyHeaderWrapper = document.getElementById('stickyHeaderWrapper');
const starryBackground = document.getElementById('starryBackground');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const refreshFeedBtn = document.getElementById('refreshFeedBtn');

const detailModal = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const connectBskyBtn = document.getElementById('connectBskyBtn');
const connectModal = document.getElementById('connectModal');
const closeConnectModal = document.getElementById('closeConnectModal');
const connectForm = document.getElementById('connectForm');

const modalImage = document.getElementById('modalImage');
const modalImageBackdrop = document.getElementById('modalImageBackdrop');
const modalSensitiveOverlay = document.getElementById('modalSensitiveOverlay');
const modalRevealBtn = document.getElementById('modalRevealBtn');
const modalAuthorAvatar = document.getElementById('modalAuthorAvatar');
const modalAuthorName = document.getElementById('modalAuthorName');
const modalAuthorHandle = document.getElementById('modalAuthorHandle');
const modalPostText = document.getElementById('modalPostText');
const modalTagsContainer = document.getElementById('modalTagsContainer');
const modalCommentsList = document.getElementById('modalCommentsList');
const modalActivityList = document.getElementById('modalActivityList');
const tabCommentsBtn = document.getElementById('tabCommentsBtn');
const tabActivityBtn = document.getElementById('tabActivityBtn');
const modalCommentTabCount = document.getElementById('modalCommentTabCount');
const modalLikeBtn = document.getElementById('modalLikeBtn');
const modalLikeIconWrap = document.getElementById('modalLikeIconWrap');
const modalLikeCount = document.getElementById('modalLikeCount');
const modalRepostBtn = document.getElementById('modalRepostBtn');
const modalRepostIconWrap = document.getElementById('modalRepostIconWrap');
const modalRepostCount = document.getElementById('modalRepostCount');
const modalCommentCount = document.getElementById('modalCommentCount');
const modalShareBtn = document.getElementById('modalShareBtn');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const modalCopyLinkBtn = document.getElementById('modalCopyLinkBtn');
const modalCardContainer = document.getElementById('modalCardContainer');
const modalImageContainer = document.getElementById('modalImageContainer');
const modalDetailsPanel = document.getElementById('modalDetailsPanel');
const commentInput = document.getElementById('commentInput');
const sendCommentBtn = document.getElementById('sendCommentBtn');
const modalPrevBtn = document.getElementById('modalPrevBtn');
const modalNextBtn = document.getElementById('modalNextBtn');
const modalCarouselDots = document.getElementById('modalCarouselDots');

let currentModalImages = [];
let currentModalImageIndex = 0;

function updateModalImageDisplay() {
    if (currentModalImages.length === 0) return;
    const currentImg = currentModalImages[currentModalImageIndex];
    modalImage.src = currentImg;
    modalImageBackdrop.style.backgroundImage = `url('${currentImg}')`;

    if (currentModalImages.length > 1) {
        if (modalPrevBtn) modalPrevBtn.classList.remove('hidden');
        if (modalNextBtn) modalNextBtn.classList.remove('hidden');
        if (modalCarouselDots) {
            modalCarouselDots.classList.remove('hidden');
            modalCarouselDots.innerHTML = '';
            currentModalImages.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.className = `w-2 h-2 rounded-full transition cursor-pointer ${idx === currentModalImageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`;
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentModalImageIndex = idx;
                    updateModalImageDisplay();
                });
                modalCarouselDots.appendChild(dot);
            });
        }
    } else {
        if (modalPrevBtn) modalPrevBtn.classList.add('hidden');
        if (modalNextBtn) modalNextBtn.classList.add('hidden');
        if (modalCarouselDots) modalCarouselDots.classList.add('hidden');
    }
}

if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentModalImages.length <= 1) return;
        currentModalImageIndex = (currentModalImageIndex - 1 + currentModalImages.length) % currentModalImages.length;
        updateModalImageDisplay();
    });
}
if (modalNextBtn) {
    modalNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentModalImages.length <= 1) return;
        currentModalImageIndex = (currentModalImageIndex + 1) % currentModalImages.length;
        updateModalImageDisplay();
    });
}

function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 4000);
}

// Generate Twinkling Stars Background
function generateStarryBackground() {
    if (!starryBackground) return;
    starryBackground.innerHTML = '';
    const starCount = 180;
    const isDark = document.documentElement.classList.contains('dark');
    const colors = isDark 
        ? ['#ffffff', '#ffffff', '#e0e7ff', '#c7d2fe', '#fef08a']
        : ['#6366f1', '#4f46e5', '#818cf8', '#312e81', '#4338ca'];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.8 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.backgroundColor = colors[i % colors.length];
        star.style.boxShadow = size > 2 ? `0 0 6px ${colors[i % colors.length]}` : 'none';
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.opacity = isDark ? (Math.random() * 0.75 + 0.25) : (Math.random() * 0.4 + 0.15);
        starryBackground.appendChild(star);
    }
}

function initDarkMode() {
    const savedDark = localStorage.getItem('starry_dark');
    state.darkMode = savedDark !== null ? savedDark === 'true' : true;
    if (state.darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    generateStarryBackground();
}

darkModeToggle.addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    localStorage.setItem('starry_dark', state.darkMode);
    if (state.darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    generateStarryBackground();
});

nsfwStateSelect.addEventListener('change', (e) => {
    state.nsfwMode = e.target.value;
    renderFeed();
});

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (scrollToTopBtn) {
        if (currentScrollY > 400) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    }

    if (!stickyHeaderWrapper) return;
    if (currentScrollY > 250 && currentScrollY > lastScrollY + 10) {
        stickyHeaderWrapper.classList.add('-translate-y-full');
    } else if (currentScrollY < lastScrollY - 5 || currentScrollY <= 50) {
        stickyHeaderWrapper.classList.remove('-translate-y-full');
    }
    lastScrollY = currentScrollY;
});

function scrollToTopAndRefresh() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (stickyHeaderWrapper) stickyHeaderWrapper.classList.remove('-translate-y-full');
    loadMorePosts().then(() => renderFeed());
}

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (refreshFeedBtn) {
    refreshFeedBtn.addEventListener('click', scrollToTopAndRefresh);
}

const logoBtn = document.getElementById('logoBtn');
const brandTitle = document.getElementById('brandTitle');
if (logoBtn) logoBtn.addEventListener('click', scrollToTopAndRefresh);
if (brandTitle) brandTitle.addEventListener('click', scrollToTopAndRefresh);

function renderCategoryChips() {
    if (!categoryChipsContainer) return;
    
    const tagSet = new Set();
    state.posts.forEach(p => {
        (p.tags || []).forEach(t => tagSet.add(t));
    });
    const tags = ['all', ...Array.from(tagSet)];

    let html = '';
    tags.forEach(tag => {
        const active = state.currentTag === tag;
        const label = tag === 'all' ? '✨ All Stars' : `#${tag}`;
        html += `
            <button class="category-chip shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                active 
                    ? 'bg-[#4f46e5] text-white shadow-sm font-semibold' 
                    : 'bg-white dark:bg-slate-900 text-[#1e1b4b] dark:text-gray-300 border border-[#e2e8f5] dark:border-slate-800 hover:border-indigo-300'
            }" data-tag="${tag}">
                ${label}
            </button>
        `;
    });

    categoryChipsContainer.innerHTML = html;

    categoryChipsContainer.querySelectorAll('.category-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentTag = btn.getAttribute('data-tag');
            renderCategoryChips();
            renderFeed();
        });
    });
}

function getFilteredPosts() {
    return state.posts.filter(post => {
        if (state.currentUserHandle && post.author.handle.toLowerCase() === state.currentUserHandle.toLowerCase()) {
            return false;
        }
        if (!post.image) return false;

        if (post.isSensitive) {
            if (state.nsfwMode === 'hide') return false;
        }

        if (state.currentFeed === 'trending' && post.likes < 500) return false;
        if (state.currentFeed === 'photography' && !post.tags.includes('photography')) return false;
        if (state.currentTag !== 'all' && !post.tags.includes(state.currentTag)) return false;

        if (state.searchQuery.trim() !== '') {
            const q = state.searchQuery.toLowerCase();
            const matchText = post.text.toLowerCase();
            const matchAuthor = post.author.name.toLowerCase() + ' ' + post.author.handle.toLowerCase();
            const matchTags = post.tags.join(' ').toLowerCase();
            if (!matchText.includes(q) && !matchAuthor.includes(q) && !matchTags.includes(q)) return false;
        }
        return true;
    });
}

function createPostCardElement(post, colWidth) {
    const isBlurred = post.isSensitive && state.nsfwMode === 'blur' && !state.revealedSensitiveIds.has(post.id);
    
    const aspectRatio = (post.height && post.width) ? (post.height / post.width) : 1.25;
    const mediaHeight = Math.round(colWidth * aspectRatio);

    const card = document.createElement('div');
    card.className = 'masonry-card bg-white dark:bg-[#0c101d] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group border border-[#e2e8f5] dark:border-slate-800/80 hover:border-indigo-200 dark:hover:border-indigo-800 cursor-pointer';
    card.style.width = `${colWidth}px`;
    card.setAttribute('data-id', post.id);

    let mediaHtml = '';
    if (post.images && post.images.length > 1) {
        if (post.images.length === 2) {
            mediaHtml = `
                <div class="grid grid-cols-2 gap-0.5 w-full h-full">
                    <img src="${post.images[0]}" class="w-full h-full object-cover">
                    <img src="${post.images[1]}" class="w-full h-full object-cover">
                </div>
            `;
        } else {
            mediaHtml = `
                <div class="grid grid-cols-2 gap-0.5 w-full h-full">
                    <img src="${post.images[0]}" class="w-full h-full object-cover">
                    <img src="${post.images[1]}" class="w-full h-full object-cover">
                </div>
                <span class="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1 shadow">
                    <i data-lucide="layers" class="w-3 h-3"></i> +${post.images.length - 1}
                </span>
            `;
        }
    } else {
        mediaHtml = `
            <img src="${post.image}" alt="Post image" loading="lazy" 
                 onload="this.classList.remove('opacity-0')"
                 class="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105 ${isBlurred ? 'filter blur-xl scale-110 opacity-100' : ''}">
        `;
    }

    card.innerHTML = `
        <div class="px-3 py-2 flex items-center justify-between text-xs border-b border-gray-100 dark:border-slate-800/60 bg-white/90 dark:bg-[#0c101d]/90 backdrop-blur-xs">
            <span class="font-medium text-gray-700 dark:text-gray-300 truncate">@${post.author.handle.split('.')[0]}</span>
            <div class="flex items-center space-x-2">
                <span class="text-[10px] text-indigo-500 font-medium">★ ${post.likes}</span>
                <button class="save-btn text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer p-0.5" title="Save to collection" data-id="${post.id}">
                    <i data-lucide="bookmark" class="w-3.5 h-3.5" stroke-width="1.75"></i>
                </button>
            </div>
        </div>

        <div class="relative overflow-hidden card-image-container bg-gray-200 dark:bg-slate-900" style="width: ${colWidth}px; height: ${mediaHeight}px; background-color: ${post.dominant_color || '#0d1117'};" data-id="${post.id}">
            ${mediaHtml}

            <div class="sensitive-badge absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center text-white ${isBlurred ? 'flex' : 'hidden'}">
                <i data-lucide="eye-off" class="w-8 h-8 text-rose-400 mb-1" stroke-width="1.75"></i>
                <span class="text-xs font-bold">Sensitive Content</span>
                <button class="reveal-card-btn mt-2 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full transition cursor-pointer" data-id="${post.id}">Reveal</button>
            </div>

            <div class="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 pointer-events-none">
                <div class="flex justify-end pointer-events-auto"></div>

                <div class="flex items-center justify-between pointer-events-auto">
                    <div class="flex items-center space-x-1">
                        <span class="text-white text-[11px] font-medium bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1 truncate max-w-[120px]">
                            <img src="${post.author.avatar}" class="w-3.5 h-3.5 rounded-full object-cover">
                            ${post.author.name}
                        </span>
                    </div>
                    <div class="flex items-center space-x-1.5">
                        <button class="quick-like-btn bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow transition flex items-center justify-center cursor-pointer" data-id="${post.id}">
                            <i data-lucide="heart" class="w-4 h-4 ${post.isLiked ? 'fill-rose-500 text-rose-500' : ''}" stroke-width="1.75"></i>
                        </button>
                        <button class="quick-repost-btn bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow transition flex items-center justify-center cursor-pointer" data-id="${post.id}">
                            <i data-lucide="repeat" class="w-4 h-4 ${post.isReposted ? 'text-emerald-500' : ''}" stroke-width="1.75"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Direct and reliable click handler on card to open inner post modal
    card.addEventListener('click', (e) => {
        if (e.target.closest('.reveal-card-btn') || e.target.closest('.save-btn') || e.target.closest('.quick-like-btn') || e.target.closest('.quick-repost-btn')) {
            return;
        }
        openModal(post.id);
    });

    const imgEl = card.querySelector('img');
    if (imgEl && imgEl.complete) {
        imgEl.classList.remove('opacity-0');
    }

    return card;
}

function renderFeed() {
    const filtered = getFilteredPosts();

    feedGrid.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        feedGrid.style.height = '0px';
        if (scrollSentinel) scrollSentinel.classList.add('hidden');
        return;
    }

    emptyState.classList.remove('flex');
    emptyState.classList.add('hidden');
    if (scrollSentinel) scrollSentinel.classList.remove('hidden');

    const containerWidth = feedGrid.clientWidth || feedGrid.parentElement.clientWidth || window.innerWidth;
    
    let numCols = 1;
    if (containerWidth >= 1280) numCols = 5;
    else if (containerWidth >= 1024) numCols = 4;
    else if (containerWidth >= 768) numCols = 3;
    else if (containerWidth >= 640) numCols = 2;

    const gap = 16;
    const totalGapWidth = gap * (numCols - 1);
    const colWidth = Math.floor((containerWidth - totalGapWidth) / numCols);

    const columnHeights = new Array(numCols).fill(0);

    filtered.forEach(post => {
        const cardEl = createPostCardElement(post, colWidth);
        feedGrid.appendChild(cardEl);

        const minHeight = Math.min(...columnHeights);
        const colIndex = columnHeights.indexOf(minHeight);

        const left = colIndex * (colWidth + gap);
        const top = minHeight;

        cardEl.style.left = `${left}px`;
        cardEl.style.top = `${top}px`;

        const aspectRatio = (post.height && post.width) ? (post.height / post.width) : 1.25;
        const mediaHeight = Math.round(colWidth * aspectRatio);
        const cardTotalHeight = mediaHeight + 38;

        columnHeights[colIndex] += cardTotalHeight + gap;
    });

    const maxHeight = Math.max(...columnHeights, 100);
    feedGrid.style.height = `${maxHeight}px`;

    // Keep infinite scroll active if list is small due to hide filter
    if (filtered.length < 12 && state.cursor) {
        loadMorePosts();
    }

    initIcons();
}

async function toggleLikeApi(post) {
    if (!state.accessJwt || !state.currentUserHandle) return;
    try {
        if (post.isLiked && !post.likeUri) {
            const res = await fetch('https://bsky.social/xrpc/com.atproto.repo.createRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.accessJwt}`
                },
                body: JSON.stringify({
                    repo: state.currentUserHandle,
                    collection: 'app.bsky.feed.like',
                    record: {
                        subject: { uri: post.id, cid: post.cid || 'bafyreie...' },
                        createdAt: new Date().toISOString()
                    }
                })
            });
            if (res.ok) {
                const data = await res.json();
                post.likeUri = data.uri;
            }
        } else if (!post.isLiked && post.likeUri) {
            const rkey = post.likeUri.split('/').pop();
            await fetch('https://bsky.social/xrpc/com.atproto.repo.deleteRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.accessJwt}`
                },
                body: JSON.stringify({
                    repo: state.currentUserHandle,
                    collection: 'app.bsky.feed.like',
                    rkey: rkey
                })
            });
            post.likeUri = null;
        }
    } catch (err) {
        console.error('API like error:', err);
    }
}

async function toggleRepostApi(post) {
    if (!state.accessJwt || !state.currentUserHandle) return;
    try {
        if (post.isReposted && !post.repostUri) {
            const res = await fetch('https://bsky.social/xrpc/com.atproto.repo.createRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.accessJwt}`
                },
                body: JSON.stringify({
                    repo: state.currentUserHandle,
                    collection: 'app.bsky.feed.repost',
                    record: {
                        subject: { uri: post.id, cid: post.cid || 'bafyreie...' },
                        createdAt: new Date().toISOString()
                    }
                })
            });
            if (res.ok) {
                const data = await res.json();
                post.repostUri = data.uri;
            }
        } else if (!post.isReposted && post.repostUri) {
            const rkey = post.repostUri.split('/').pop();
            await fetch('https://bsky.social/xrpc/com.atproto.repo.deleteRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.accessJwt}`
                },
                body: JSON.stringify({
                    repo: state.currentUserHandle,
                    collection: 'app.bsky.feed.repost',
                    rkey: rkey
                })
            });
            post.repostUri = null;
        }
    } catch (err) {
        console.error('API repost error:', err);
    }
}

// Global delegated event listeners for quick actions on cards
document.addEventListener('click', async (e) => {
    const revealBtn = e.target.closest('.reveal-card-btn');
    if (revealBtn) {
        e.stopPropagation();
        state.revealedSensitiveIds.add(revealBtn.getAttribute('data-id'));
        renderFeed();
        return;
    }

    const likeBtn = e.target.closest('.quick-like-btn');
    if (likeBtn) {
        e.stopPropagation();
        const post = state.posts.find(p => p.id === likeBtn.getAttribute('data-id'));
        if (post) {
            post.isLiked = !post.isLiked;
            post.likes += post.isLiked ? 1 : -1;
            renderFeed();
            if (state.activeModalPost && state.activeModalPost.id === post.id) {
                updateModalLikeState();
            }
            await toggleLikeApi(post);
        }
        return;
    }

    const repostBtn = e.target.closest('.quick-repost-btn');
    if (repostBtn) {
        e.stopPropagation();
        const post = state.posts.find(p => p.id === repostBtn.getAttribute('data-id'));
        if (post) {
            post.isReposted = !post.isReposted;
            post.reposts += post.isReposted ? 1 : -1;
            renderFeed();
            if (state.activeModalPost && state.activeModalPost.id === post.id) {
                updateModalRepostState();
            }
            await toggleRepostApi(post);
        }
        return;
    }

    const saveBtn = e.target.closest('.save-btn');
    if (saveBtn) {
        e.stopPropagation();
        alert('Post saved to your starry collection!');
        return;
    }
});

// Modal Inner Post Handler with adaptive image container and horizontal/vertical layout
async function openModal(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;
    state.activeModalPost = post;

    currentModalImages = (post.images && post.images.length > 0) ? post.images : [post.image];
    currentModalImageIndex = 0;
    updateModalImageDisplay();
    
    // Determine orientation: vertical (height > width) vs horizontal (width >= height)
    const width = post.width || 800;
    const height = post.height || 800;
    const isVertical = height > width;

    if (isVertical) {
        // Vertical image: info on the side (flex-col md:flex-row)
        if (modalCardContainer) modalCardContainer.className = 'bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-gray-200 dark:border-slate-800';
        if (modalImageContainer) modalImageContainer.className = 'md:w-3/5 bg-slate-950 flex items-center justify-center relative overflow-hidden min-h-[320px] md:min-h-[600px]';
        if (modalDetailsPanel) modalDetailsPanel.className = 'md:w-2/5 flex flex-col h-full max-h-[85vh] md:max-h-[600px]';
        modalImage.className = 'relative z-10 max-h-[85vh] max-w-full object-contain rounded-xl shadow-lg';
    } else {
        // Horizontal image: info below the image (flex-col)
        if (modalCardContainer) modalCardContainer.className = 'bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative border border-gray-200 dark:border-slate-800';
        if (modalImageContainer) modalImageContainer.className = 'w-full bg-slate-950 flex items-center justify-center relative overflow-hidden max-h-[48vh] min-h-[250px] p-4';
        if (modalDetailsPanel) modalDetailsPanel.className = 'w-full flex flex-col max-h-[45vh] overflow-y-auto';
        modalImage.className = 'relative z-10 max-h-[46vh] max-w-full object-contain rounded-xl shadow-lg';
    }

    modalAuthorAvatar.src = post.author.avatar;
    modalAuthorName.textContent = post.author.name;
    modalAuthorHandle.textContent = '@' + post.author.handle;

    const hashtagRegex = /#([a-zA-Z0-9_]+)/g;
    const cleanText = post.text.replace(hashtagRegex, '').trim();
    modalPostText.textContent = cleanText || post.text;

    if (modalCommentCount) modalCommentCount.textContent = post.comments.length;
    modalCommentTabCount.textContent = post.comments.length;

    const isBlurred = post.isSensitive && state.nsfwMode === 'blur' && !state.revealedSensitiveIds.has(post.id);
    if (isBlurred) {
        modalSensitiveOverlay.classList.remove('hidden');
    } else {
        modalSensitiveOverlay.classList.add('hidden');
    }

    updateModalLikeState();
    updateModalRepostState();

    modalTagsContainer.innerHTML = '';
    const allTags = new Set([...post.tags]);
    let match;
    while ((match = hashtagRegex.exec(post.text)) !== null) {
        allTags.add(match[1].toLowerCase());
    }
    Array.from(allTags).forEach(tag => {
        const span = document.createElement('span');
        span.className = 'text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-semibold px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/60 shadow-2xs';
        span.textContent = '#' + tag;
        modalTagsContainer.appendChild(span);
    });

    renderComments();
    renderActivity();

    if (state.accessJwt && post.id.startsWith('at://')) {
        fetchPostThread(post.id);
    }

    detailModal.classList.remove('hidden');
    detailModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    initIcons();
}

modalRevealBtn.addEventListener('click', () => {
    if (state.activeModalPost) {
        state.revealedSensitiveIds.add(state.activeModalPost.id);
        modalSensitiveOverlay.classList.add('hidden');
        renderFeed();
    }
});

function updateModalLikeState() {
    const post = state.activeModalPost;
    if (!post) return;
    modalLikeCount.textContent = post.likes;
    const icon = modalLikeIconWrap.querySelector('svg') || modalLikeIconWrap.querySelector('i');
    if (icon) {
        if (post.isLiked) {
            modalLikeIconWrap.className = 'p-2 rounded-full bg-rose-50 dark:bg-rose-950/30 text-rose-500 transition';
            icon.classList.add('fill-rose-500', 'text-rose-500');
        } else {
            modalLikeIconWrap.className = 'p-2 rounded-full group-hover:bg-rose-50 dark:group-hover:bg-rose-950/30 transition text-gray-600 dark:text-gray-400';
            icon.classList.remove('fill-rose-500', 'text-rose-500');
        }
    }
}

function updateModalRepostState() {
    const post = state.activeModalPost;
    if (!post) return;
    modalRepostCount.textContent = post.reposts;
    const icon = modalRepostIconWrap.querySelector('svg') || modalRepostIconWrap.querySelector('i');
    if (icon) {
        if (post.isReposted) {
            modalRepostIconWrap.className = 'p-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 transition';
            icon.classList.add('text-emerald-500');
        } else {
            modalRepostIconWrap.className = 'p-2 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30 transition text-gray-600 dark:text-gray-400';
            icon.classList.remove('text-emerald-500');
        }
    }
}

async function fetchPostThread(uri) {
    try {
        const res = await fetch(`https://bsky.social/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(uri)}`, {
            headers: { 'Authorization': `Bearer ${state.accessJwt}` }
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data.thread && data.thread.replies) {
            const replies = data.thread.replies.map(r => ({
                author: r.post.author.displayName || r.post.author.handle,
                handle: r.post.author.handle,
                text: r.post.record.text || ''
            }));
            if (replies.length > 0) {
                state.activeModalPost.comments = replies;
                if (modalCommentCount) modalCommentCount.textContent = replies.length;
                modalCommentTabCount.textContent = replies.length;
                renderComments();
            }
        }
    } catch (err) {
        console.warn('Could not fetch post thread:', err);
    }
}

function renderComments() {
    const post = state.activeModalPost;
    if (!post) return;
    modalCommentsList.innerHTML = post.comments.length === 0 ? '<p class="text-xs text-gray-400 dark:text-gray-500 italic">No comments yet. Be the first to comment!</p>' : '';
    post.comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'flex items-start space-x-2.5 text-xs';
        div.innerHTML = `<div class="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0">${c.author[0]}</div><div class="flex-1 bg-indigo-50/90 dark:bg-slate-800 p-3 rounded-xl border border-indigo-200/80 dark:border-slate-700 shadow-sm"><span class="font-bold text-slate-900 dark:text-gray-100">${c.author}</span><p class="text-slate-700 dark:text-gray-300 mt-1">${c.text}</p></div>`;
        modalCommentsList.appendChild(div);
    });
}

function renderActivity() {
    const post = state.activeModalPost;
    if (!post) return;
    const activities = post.activity || [];
    modalActivityList.innerHTML = activities.length === 0 ? '<p class="text-xs text-gray-400 dark:text-gray-500 italic">No recent reposts or quotes.</p>' : '';
    activities.forEach(a => {
        const div = document.createElement('div');
        div.className = 'flex items-center space-x-2.5 text-xs bg-gray-50 dark:bg-slate-800 p-2.5 rounded-xl border border-gray-100 dark:border-slate-700';
        div.innerHTML = `<i data-lucide="repeat" class="w-4 h-4 text-emerald-500" stroke-width="1.75"></i><span class="font-semibold text-gray-800 dark:text-gray-200">@${a.handle}</span><span class="text-gray-400">reposted this</span>`;
        modalActivityList.appendChild(div);
    });
    initIcons();
}

tabCommentsBtn.addEventListener('click', () => {
    tabCommentsBtn.className = 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 pb-1 transition font-bold cursor-pointer';
    tabActivityBtn.className = 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 pb-1 transition cursor-pointer';
    modalCommentsList.classList.remove('hidden');
    modalActivityList.classList.add('hidden');
});

tabActivityBtn.addEventListener('click', () => {
    tabActivityBtn.className = 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 pb-1 transition font-bold cursor-pointer';
    tabCommentsBtn.className = 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 pb-1 transition cursor-pointer';
    modalActivityList.classList.remove('hidden');
    modalCommentsList.classList.add('hidden');
});

function closeModal() {
    detailModal.classList.add('hidden');
    detailModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    state.activeModalPost = null;
}

// Copy link option for sharing with friends
if (modalCopyLinkBtn) {
    modalCopyLinkBtn.addEventListener('click', async () => {
        if (!state.activeModalPost) return;
        const shareUrl = window.location.href.split('#')[0] + '#post=' + encodeURIComponent(state.activeModalPost.id);
        try {
            await navigator.clipboard.writeText(shareUrl);
            alert('Post link copied to clipboard! ✨');
        } catch (err) {
            console.error('Clipboard copy error:', err);
            prompt('Copy link to share:', shareUrl);
        }
    });
}

modalShareBtn.addEventListener('click', async () => {
    if (!state.activeModalPost || !state.activeModalPost.image) return;
    try {
        const response = await fetch(state.activeModalPost.image);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `starry-night-${Date.now()}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (err) {
        console.error('Download error:', err);
        window.open(state.activeModalPost.image, '_blank');
    }
});

if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', () => {
        if (!state.activeModalPost) return;
        alert('Post saved to your starry collection! ✨');
    });
}

sendCommentBtn.addEventListener('click', () => {
    const val = commentInput.value.trim();
    if (!val || !state.activeModalPost) return;
    state.activeModalPost.comments.push({
        author: state.currentUserHandle || 'You',
        handle: state.currentUserHandle || 'you.bsky.social',
        text: val
    });
    commentInput.value = '';
    if (modalCommentCount) modalCommentCount.textContent = state.activeModalPost.comments.length;
    modalCommentTabCount.textContent = state.activeModalPost.comments.length;
    renderComments();
});

searchInput.addEventListener('input', (e) => { state.searchQuery = e.target.value; renderFeed(); });

if (feedSelect) {
    feedSelect.addEventListener('change', async (e) => {
        const val = e.target.value;
        const separatorIndex = val.indexOf(':');
        const type = val.substring(0, separatorIndex);
        const uri = val.substring(separatorIndex + 1);

        state.currentFeed = type;
        state.currentFeedUri = uri || null;
        state.cursor = null;

        try {
            if (type === 'custom' && uri) {
                const result = await fetchPostsForFeed(uri, null, state.accessJwt);
                const mapped = mapRawPosts(result.posts, state.currentUserHandle);
                state.posts = mapped;
                state.cursor = result.cursor;
                renderCategoryChips();
                renderFeed();
            } else if (type === 'discover') {
                state.currentFeedUri = null;
                if (state.accessJwt) {
                    try {
                        const result = await fetchPostsForFeed(null, null, state.accessJwt);
                        const mapped = mapRawPosts(result.posts, state.currentUserHandle);
                        state.posts = mapped.length > 0 ? mapped : [...INITIAL_POSTS];
                        state.cursor = result.cursor;
                    } catch (e) {
                        state.posts = [...INITIAL_POSTS];
                    }
                } else {
                    state.posts = [...INITIAL_POSTS];
                }
                renderCategoryChips();
                renderFeed();
            } else {
                renderCategoryChips();
                renderFeed();
            }
        } catch (err) {
            console.error('Error switching feed via select:', err);
        }
    });
}

closeModalBtn.addEventListener('click', closeModal);
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) closeModal(); });

modalLikeBtn.addEventListener('click', async () => {
    if (!state.activeModalPost) return;
    const post = state.activeModalPost;
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    updateModalLikeState();
    renderFeed();
    await toggleLikeApi(post);
});

modalRepostBtn.addEventListener('click', async () => {
    if (!state.activeModalPost) return;
    const post = state.activeModalPost;
    post.isReposted = !post.isReposted;
    post.reposts += post.isReposted ? 1 : -1;
    updateModalRepostState();
    renderFeed();
    await toggleRepostApi(post);
});

connectBskyBtn.addEventListener('click', () => { connectModal.classList.remove('hidden'); connectModal.classList.add('flex'); });
closeConnectModal.addEventListener('click', () => { connectModal.classList.add('hidden'); connectModal.classList.remove('flex'); });

async function fetchUserFeeds(accessJwt) {
    try {
        const prefRes = await fetch('https://bsky.social/xrpc/app.bsky.actor.getPreferences', {
            headers: { 'Authorization': `Bearer ${accessJwt}` }
        });
        if (!prefRes.ok) return [];
        const prefData = await prefRes.json();
        
        let feedUris = [];
        for (const pref of (prefData.preferences || [])) {
            if (pref.$type === 'app.bsky.actor.defs#savedFeedsPrefV2' && pref.items) {
                feedUris = pref.items.filter(item => item.type === 'feed').map(item => item.value);
            } else if (pref.$type === 'app.bsky.actor.defs#savedFeedsPref') {
                feedUris = [...(pref.pinned || []), ...(pref.saved || [])];
            }
        }

        if (feedUris.length === 0) return [];

        const genRes = await fetch(`https://bsky.social/xrpc/app.bsky.feed.getFeedGenerators?${feedUris.map(uri => `feeds=${encodeURIComponent(uri)}`).join('&')}`, {
            headers: { 'Authorization': `Bearer ${accessJwt}` }
        });
        if (!genRes.ok) return [];
        const genData = await genRes.json();
        return genData.feeds || [];
    } catch (err) {
        console.warn('Could not fetch user saved feeds:', err);
        return [];
    }
}

async function fetchPostsForFeed(feedUri = null, cursor = null, accessJwt) {
    let url = '';
    let headers = accessJwt ? { 'Authorization': `Bearer ${accessJwt}` } : {};

    if (feedUri) {
        url = `https://bsky.social/xrpc/app.bsky.feed.getFeed?feed=${encodeURIComponent(feedUri)}&limit=50`;
    } else {
        url = `https://bsky.social/xrpc/app.bsky.feed.getTimeline?limit=50`;
    }

    if (cursor) {
        url += `&cursor=${encodeURIComponent(cursor)}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Failed to fetch feed posts');
    const data = await res.json();
    return {
        posts: data.feed || [],
        cursor: data.cursor || null
    };
}

function mapRawPosts(rawPosts, currentUserHandle) {
    const mappedPosts = [];
    const sampleColors = ['#0d1117', '#090d16', '#111026', '#0a0e1a', '#141824', '#070913'];

    for (let i = 0; i < rawPosts.length; i++) {
        const item = rawPosts[i];
        const post = item.post;
        if (!post || !post.record) continue;

        if (currentUserHandle && post.author.handle.toLowerCase() === currentUserHandle.toLowerCase()) {
            continue;
        }

        if (item.reason && item.reason.$type === 'app.bsky.feed.defs#reasonRepost') {
            continue;
        }

        const isSensitive = 
            (Array.isArray(post.record?.labels) && post.record.labels.some(l => l.val === 'nsfw' || l.val === 'nudity' || l.val === 'porn')) ||
            (Array.isArray(post?.labels) && post.labels.some(l => l.val === 'nsfw' || l.val === 'nudity' || l.val === 'porn')) ||
            false;

        if (state.nsfwMode === 'hide' && isSensitive) {
            continue;
        }

        const embed = post.embed;
        let imageUrl = null;
        let images = [];
        let imgWidth = 800;
        let imgHeight = 900;

        if (embed) {
            let rawImages = [];
            if (embed.$type === 'app.bsky.embed.images#view' && embed.images) {
                rawImages = embed.images;
            } else if (embed.media && embed.media.images) {
                rawImages = embed.media.images;
            } else if (embed.images) {
                rawImages = embed.images;
            }

            if (rawImages.length > 0) {
                images = rawImages.map(img => img.fullsize || img.thumb);
                imageUrl = images[0];
                if (rawImages[0].aspectRatio) {
                    imgWidth = rawImages[0].aspectRatio.width || 800;
                    imgHeight = rawImages[0].aspectRatio.height || 1000;
                }
            }
        }

        if (!imageUrl) continue;

        if (imgHeight === 900) {
            const variations = [750, 900, 1100, 1000, 850, 1200];
            imgHeight = variations[i % variations.length];
        }

        const text = post.record.text || '';
        const tags = [];
        const hashtagRegex = /#([a-zA-Z0-9_]+)/g;
        let match;
        while ((match = hashtagRegex.exec(text)) !== null) {
            tags.push(match[1].toLowerCase());
        }
        if (tags.length === 0) {
            tags.push('space');
        }

        mappedPosts.push({
            id: post.uri,
            cid: post.cid,
            author: {
                name: post.author.displayName || post.author.handle,
                handle: post.author.handle,
                avatar: post.author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
            },
            image: imageUrl,
            images: images.length > 0 ? images : [imageUrl],
            width: imgWidth,
            height: imgHeight,
            dominant_color: sampleColors[i % sampleColors.length],
            text: text,
            tags: tags,
            likes: post.likeCount || 0,
            reposts: post.repostCount || 0,
            isLiked: !!post.viewer?.like,
            likeUri: post.viewer?.like || null,
            isReposted: !!post.viewer?.repost,
            repostUri: post.viewer?.repost || null,
            isSensitive: isSensitive,
            feedType: 'discover',
            comments: [],
            activity: []
        });
    }
    return mappedPosts;
}

function renderSavedFeedTabs() {
    if (!feedSelect) return;

    let html = `
        <option value="discover:">🌟 Discover (Timeline)</option>
        <option value="trending:">🔥 Trending</option>
        <option value="photography:">📷 Photography</option>
    `;

    state.savedFeeds.forEach(feed => {
        html += `<option value="custom:${feed.uri}">📌 ${feed.displayName}</option>`;
    });

    feedSelect.innerHTML = html;
    if (state.currentFeedUri) {
        feedSelect.value = `custom:${state.currentFeedUri}`;
    } else {
        feedSelect.value = `${state.currentFeed}:`;
    }
}

async function loadMorePosts() {
    if (state.isLoadingMore) return;
    state.isLoadingMore = true;
    if (scrollSentinel) scrollSentinel.classList.remove('hidden');

    try {
        if (state.accessJwt && state.cursor) {
            const result = await fetchPostsForFeed(state.currentFeedUri, state.cursor, state.accessJwt);
            const newMapped = mapRawPosts(result.posts, state.currentUserHandle);
            
            const existingIds = new Set(state.posts.map(p => p.id));
            const uniqueNewPosts = newMapped.filter(p => !existingIds.has(p.id));

            if (uniqueNewPosts.length > 0) {
                state.posts = [...state.posts, ...uniqueNewPosts];
                renderCategoryChips();
                renderFeed();
            }
            state.cursor = result.cursor;
        } else {
            await new Promise(resolve => setTimeout(resolve, 350));
            state.mockPageIndex++;
            const batch = MOCK_BATCHES[state.mockPageIndex % MOCK_BATCHES.length];
            const newPosts = batch.map((m, idx) => ({
                id: `demo-post-${Date.now()}-${state.mockPageIndex}-${idx}`,
                author: { name: 'Cosmic Explorer ' + (state.mockPageIndex * 4 + idx), handle: 'explorer.bsky.social', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
                image: m.url,
                width: m.w,
                height: m.h,
                dominant_color: '#0d1117',
                text: m.text,
                tags: [m.tag, 'space'],
                likes: Math.floor(Math.random() * 800) + 120,
                reposts: Math.floor(Math.random() * 200) + 20,
                isLiked: false,
                isReposted: false,
                isSensitive: false,
                feedType: 'discover',
                comments: [],
                activity: []
            }));
            state.posts = [...state.posts, ...newPosts];
            renderCategoryChips();
            renderFeed();
            state.cursor = 'demo-cursor-active';
        }
    } catch (err) {
        console.error('Error loading more posts via infinite scroll:', err);
    } finally {
        state.isLoadingMore = false;
        if (scrollSentinel && !state.accessJwt) {
            scrollSentinel.classList.add('hidden');
        }
    }
}

const sentinelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !state.isLoadingMore) {
            loadMorePosts();
        }
    });
}, { rootMargin: '1500px' });

if (scrollSentinel) {
    sentinelObserver.observe(scrollSentinel);
    state.cursor = 'demo-cursor-active';
}

const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        if (entry.target === feedGrid || entry.target === document.body) {
            renderFeed();
        }
    }
});

if (feedGrid) {
    resizeObserver.observe(feedGrid);
}

async function fetchBlueskyPosts(handle, appPassword) {
    if (!appPassword) {
        throw new Error('An App Password is required to fetch your home timeline and saved feeds.');
    }

    const authRes = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: handle, password: appPassword })
    });
    
    if (!authRes.ok) {
        throw new Error('Authentication failed. Please check your Handle and App Password.');
    }

    const session = await authRes.json();
    state.accessJwt = session.accessJwt;
    state.currentUserHandle = session.handle || handle;

    const [timelineResult, savedFeeds] = await Promise.all([
        fetchPostsForFeed(null, null, state.accessJwt),
        fetchUserFeeds(state.accessJwt)
    ]);

    state.cursor = timelineResult.cursor;
    state.savedFeeds = savedFeeds;

    const forYouFeed = savedFeeds.find(f => f.displayName && f.displayName.toLowerCase().includes('for you'));
    let postsToMap = timelineResult.posts;
    if (forYouFeed) {
        state.currentFeed = 'custom';
        state.currentFeedUri = forYouFeed.uri;
        try {
            const customResult = await fetchPostsForFeed(forYouFeed.uri, null, state.accessJwt);
            postsToMap = customResult.posts;
            state.cursor = customResult.cursor;
        } catch (e) {}
    }

    renderSavedFeedTabs();
    return mapRawPosts(postsToMap, handle);
}

connectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const handle = document.getElementById('bskyHandle').value.trim();
    const appPassword = document.getElementById('bskyAppPassword').value.trim();
    const submitBtn = connectForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Connecting & Exploring...';

        const fetchedPosts = await fetchBlueskyPosts(handle, appPassword);

        if (fetchedPosts.length > 0) {
            state.posts = fetchedPosts;
        }

        connectModal.classList.add('hidden');
        connectModal.classList.remove('flex');

        document.getElementById('connectBtnLabel').textContent = `@${handle.split('.')[0]}`;

        renderCategoryChips();
        renderFeed();
        showToast(`Successfully connected to @${handle}! Loaded ${fetchedPosts.length} posts.`);
    } catch (err) {
        showToast(`Failed to connect: ${err.message}`);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnTest;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    generateStarryBackground();
    renderCategoryChips();
    renderFeed();
    if (scrollSentinel) sentinelObserver.observe(scrollSentinel);
});

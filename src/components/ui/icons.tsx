import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X,
  Phone,
  ClipboardCheck,
  NotepadText,
  Wallet,
  ShoppingCart,
  Store,
  Crown,
  BookHeart,
  Headset,
  Pencil,
  ShieldCheck,
  Truck,
  HandHelping,
  Gift,
  BadgeCheck,
  HandCoins,
  MapPin,
  Mail,
  Trash2,
  DollarSign,
  Receipt,
  LogOut,
  Upload,
  Bell,
  Search,
  AlignJustify,
  LayoutGrid,
  ReceiptText,
  CirclePlus,
  ShieldAlert,
  ShieldX,
  ChartColumn,
  CircleHelp,
  ChevronsUpDown,
  Eye,
  EyeOff,
  Filter,
  CalendarDays,
  ImageUp,
  Info,
  CloudUpload,
  Dot,
  FileType,
  Download,
  Activity,
  Stethoscope,
  Pill,
  Syringe,
  ClipboardList,
  List,
  Package,
  Calendar,
  Users,
  Menu,
  BarChart,
  PieChart,
  LineChart,
  FileBarChart,
  ClipboardX,
  Clock,
  Inbox,
  XCircle,
  FileSpreadsheet,
  TrendingUp,
  Minus,
  UserCheck,
  Book
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  book: Book,
  userCheck: UserCheck,
  trendingUp: TrendingUp,
  minus: Minus,
  fileSpreadsheet: FileSpreadsheet,
  filePdf: File,
  xCircle: XCircle,
  x: X,
  inbox: Inbox,
  clock: Clock,
  download: Download,
  fileType: FileType,
  dot: Dot,
  cloudUpload: CloudUpload,
  info: Info,
  eyeOff: EyeOff,
  eye: Eye,
  chevronsUpDown: ChevronsUpDown,
  circleHelp: CircleHelp,
  chartColumn: ChartColumn,
  shieldX: ShieldX,
  shieldAlert: ShieldAlert,
  circlePlus: CirclePlus,
  receiptText: ReceiptText,
  alignJustify: AlignJustify,
  layoutGrid: LayoutGrid,
  search: Search,
  bell: Bell,
  receipt: Receipt,
  money: DollarSign,
  upload: Upload,
  trash2: Trash2,
  mail: Mail,
  mapPin: MapPin,
  logOut: LogOut,
  handCoins: HandCoins,
  badgeCheck: BadgeCheck,
  dashboard: LayoutDashboardIcon,
  logo: Command,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  check: Check,
  phone: Phone,
  clipboardCheck: ClipboardCheck,
  clipboardX: ClipboardX,
  notepadText: NotepadText,
  wallet: Wallet,
  shoppingCart: ShoppingCart,
  store: Store,
  crown: Crown,
  bookHeart: BookHeart,
  headset: Headset,
  pencil: Pencil,
  shieldCheck: ShieldCheck,
  truck: Truck,
  handHelping: HandHelping,
  gift: Gift,
  filter: Filter,
  calendar: CalendarDays,
  ImageUp: ImageUp,
  // Thêm các biểu tượng y tế
  activity: Activity,
  stethoscope: Stethoscope,
  pill: Pill,
  syringe: Syringe,
  clipboardList: ClipboardList,
  list: List,
  package: Package,
  calendar2: Calendar,
  users: Users,
  menu: Menu,
  barChart: BarChart,
  pieChart: PieChart,
  lineChart: LineChart,
  fileBarChart: FileBarChart,
  logout: LogOut,
  plus: Plus,
  // ... existing code ...
  medical: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 9h-5V4H8v5H3v8h5v5h6v-5h5z" />
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  brand: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <path
        d="M21.0862 20.4817V21.4817C21.0953 21.4817 21.1043 21.4816 21.1133 21.4813L21.0862 20.4817ZM6.97328 20.4817L6.97244 21.4817H6.97328V20.4817ZM5.11843 19.124L4.16601 19.4288L4.16798 19.4348L5.11843 19.124ZM2.39665 10.6203L3.34905 10.3154C3.34678 10.3083 3.34443 10.3012 3.34199 10.2942L2.39665 10.6203ZM3.94908 9.21148L3.51371 10.1117C3.52824 10.1188 3.54294 10.1254 3.5578 10.1317L3.94908 9.21148ZM9.23136 11.4574L8.84008 12.3776C9.32923 12.5856 9.8956 12.3746 10.1294 11.8972L9.23136 11.4574ZM13.0217 3.71928L12.1266 3.27344L12.1236 3.27939L13.0217 3.71928ZM14.0298 3.09082V4.09082V3.09082ZM15.0378 3.71928L15.9345 3.27656L15.933 3.27345L15.0378 3.71928ZM18.8584 11.4574L17.9618 11.9001C18.1969 12.3763 18.7633 12.5856 19.2516 12.3768L18.8584 11.4574ZM24.1105 9.21148L23.7278 8.2875L23.7173 8.29201L24.1105 9.21148ZM25.6125 10.6203L26.5649 10.9251L26.5654 10.9233L25.6125 10.6203ZM22.8907 19.124L23.8413 19.4345L23.8431 19.4288L22.8907 19.124ZM21.0862 19.4817H6.97328V21.4817H21.0862V19.4817ZM6.97412 19.4817C6.77641 19.4815 6.5825 19.4184 6.41991 19.2994L5.23859 20.9132C5.74188 21.2816 6.34853 21.4812 6.97244 21.4817L6.97412 19.4817ZM6.41991 19.2994C6.25713 19.1802 6.13349 19.0106 6.06888 18.8131L4.16798 19.4348C4.36173 20.0272 4.73549 20.545 5.23859 20.9132L6.41991 19.2994ZM6.07084 18.8191L3.34905 10.3154L1.44424 10.9251L4.16603 19.4288L6.07084 18.8191ZM3.34199 10.2942C3.33213 10.2656 3.33078 10.2342 3.33832 10.2045L1.40001 9.71163C1.29637 10.1192 1.31413 10.5486 1.4513 10.9463L3.34199 10.2942ZM3.33832 10.2045C3.34585 10.1749 3.36141 10.1501 3.38107 10.1323L2.03704 8.65119C1.72465 8.93467 1.50368 9.30397 1.40001 9.71163L3.33832 10.2045ZM3.38107 10.1323C3.4006 10.1145 3.42334 10.1044 3.44596 10.1011L3.15827 8.12186C2.73955 8.18273 2.34957 8.36757 2.03704 8.65119L3.38107 10.1323ZM3.44596 10.1011C3.46853 10.0978 3.49194 10.1012 3.51371 10.1117L4.38445 8.31122C4.00386 8.12717 3.57705 8.06099 3.15827 8.12186L3.44596 10.1011ZM3.5578 10.1317L8.84008 12.3776L9.62263 10.5371L4.34035 8.2912L3.5578 10.1317ZM10.1294 11.8972L13.9197 4.15917L12.1236 3.27939L8.33331 11.0175L10.1294 11.8972ZM13.9168 4.16511C13.9291 4.14049 13.9469 4.12158 13.9669 4.10913L12.9088 2.41193C12.5728 2.6214 12.3026 2.92011 12.1266 3.27345L13.9168 4.16511ZM13.9669 4.10913C13.9868 4.09675 14.0085 4.09082 14.0298 4.09082V2.09082C13.633 2.09082 13.2449 2.20239 12.9088 2.41193L13.9669 4.10913ZM14.0298 4.09082C14.051 4.09082 14.0728 4.09675 14.0926 4.10913L15.1507 2.41193C14.8146 2.20239 14.4265 2.09082 14.0298 2.09082V4.09082ZM14.0926 4.10913C14.1126 4.12158 14.1305 4.14049 14.1427 4.16511L15.933 3.27345C15.757 2.92011 15.4867 2.6214 15.1507 2.41193L14.0926 4.10913ZM14.1412 4.16199L17.9618 11.9001L19.7551 11.0146L15.9345 3.27656L14.1412 4.16199ZM19.2516 12.3768L24.5036 10.1309L23.7173 8.29201L18.4652 10.5379L19.2516 12.3768ZM24.4931 10.1354C24.5143 10.1266 24.5369 10.1243 24.5586 10.1283L24.92 8.16123C24.5185 8.08747 24.1047 8.13149 23.7279 8.28756L24.4931 10.1354ZM24.5586 10.1283C24.5805 10.1323 24.6022 10.1428 24.6209 10.1603L25.9891 8.70154C25.6922 8.42304 25.3214 8.23498 24.92 8.16123L24.5586 10.1283ZM24.6209 10.1603C24.6397 10.1779 24.6545 10.202 24.6618 10.2305L26.5982 9.72986C26.4966 9.33696 26.2859 8.97992 25.9891 8.70154L24.6209 10.1603ZM24.6618 10.2305C24.6692 10.2591 24.6684 10.2893 24.6595 10.3172L26.5654 10.9233C26.6884 10.5366 26.6997 10.1227 26.5982 9.72986L24.6618 10.2305ZM24.6601 10.3154L21.9383 18.8191L23.8431 19.4288L26.5649 10.9251L24.6601 10.3154ZM21.9401 18.8134C21.8769 19.0069 21.7571 19.1737 21.5991 19.2926L22.8016 20.8907C23.2895 20.5236 23.6517 20.0146 23.8413 19.4345L21.9401 18.8134ZM21.5991 19.2926C21.4413 19.4113 21.2528 19.4768 21.0592 19.4821L21.1133 21.4813C21.724 21.4648 22.3136 21.2579 22.8016 20.8907L21.5991 19.2926ZM15.3335 15.1667C15.3335 15.903 14.7365 16.5 14.0002 16.5V18.5C15.8411 18.5 17.3335 17.0076 17.3335 15.1667H15.3335ZM14.0002 16.5C13.2638 16.5 12.6668 15.903 12.6668 15.1667H10.6668C10.6668 17.0076 12.1592 18.5 14.0002 18.5V16.5ZM12.6668 15.1667C12.6668 14.4303 13.2638 13.8333 14.0002 13.8333V11.8333C12.1592 11.8333 10.6668 13.3257 10.6668 15.1667H12.6668ZM14.0002 13.8333C14.7365 13.8333 15.3335 14.4303 15.3335 15.1667H17.3335C17.3335 13.3257 15.8411 11.8333 14.0002 11.8333V13.8333Z"
        fill="#FF9027"
      />
      <path
        d="M6.47412 23.7424H20.9665"
        stroke="#FF9027"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  shoes: ({ ...props }: LucideProps) => (
    <svg
      fill="#000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 462.68 462.68"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enable-background="new 0 0 462.68 462.68"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="10"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path d="m454.68,383.824v-30.546c0-12.481-7.382-23.769-18.807-28.756-37.15-16.212-70.676-43.134-94.401-75.807-25.378-34.948-38.792-74.831-38.792-115.337 0-10.408 0.799-20.936 2.374-31.29 1.78-11.708-3.017-23.288-12.519-30.222l-89.814-65.541c-5.072-3.701-11.279-5.207-17.481-4.235-6.202,0.969-11.655,4.295-15.355,9.366l-120.311,164.882c-2.568-1.039-5.371-1.385-8.177-0.947-4.091,0.64-7.688,2.833-10.128,6.178l-28.296,38.778c-5.037,6.904-3.519,16.619 3.385,21.657l272.682,198.98c17.834,13.015 38.931,19.894 61.01,19.894h107.13c8.547,0 15.5-6.953 15.5-15.5v-48c0-5.826-3.235-10.907-8-13.554zm-272.679-363.527c1.339-1.834 3.311-3.038 5.554-3.388 2.24-0.355 4.487,0.192 6.323,1.532l89.815,65.542c4.965,3.622 7.467,9.695 6.53,15.849-1.688,11.099-2.544,22.385-2.544,33.546 0,8.609 0.568,17.188 1.675,25.702l-23.547,7.849c-3.93,1.311-6.053,5.558-4.743,9.487 1.048,3.143 3.975,5.13 7.114,5.13 0.786,0 1.586-0.125 2.373-0.387l21.317-7.106c1.211,5.84 2.691,11.637 4.417,17.382l-22.478,7.493c-3.93,1.311-6.053,5.558-4.743,9.487 1.048,3.143 3.975,5.13 7.114,5.13 0.786,0 1.586-0.125 2.373-0.387l22.555-7.519c2.116,5.563 4.484,11.063 7.085,16.493l-23.134,7.711c-3.929,1.31-6.053,5.558-4.743,9.487 1.048,3.143 3.974,5.13 7.114,5.13 0.786,0 1.586-0.125 2.373-0.387l25.416-8.472c2.997,5.293 6.235,10.502 9.702,15.62l-25.612,8.538c-3.93,1.31-6.053,5.558-4.743,9.487 1.048,3.143 3.974,5.13 7.114,5.13 0.786,0 1.586-0.125 2.373-0.387l27.5-9.167c0.868-0.289 1.642-0.729 2.316-1.27 24.923,32.081 58.753,58.456 96.004,74.713 5.958,2.601 9.808,8.491 9.808,15.008v28.601h-99.632c-5.227,0-10.221-1.628-14.442-4.709l-263.629-192.376 120.025-164.492zm265.679,425.081c5.68434e-14,0.275-0.225,0.5-0.5,0.5h-107.131c-18.879,0-36.918-5.882-52.168-17.011l-272.682-198.98c-0.223-0.162-0.271-0.476-0.109-0.698l28.296-38.778c0.03-0.041 0.122-0.168 0.327-0.199 0.029-0.005 0.058-0.007 0.084-0.007 0.154,0 0.251,0.07 0.287,0.097l272.68,198.985c6.807,4.967 14.858,7.592 23.284,7.592h107.132c0.275,0 0.5,0.225 0.5,0.5v47.999z"></path>{' '}
        </g>{' '}
      </g>
    </svg>
  )
};

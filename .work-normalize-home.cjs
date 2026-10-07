const fs = require('fs');
const p = 'C:/Users/juane/Desktop/Prospecto Collision Center/collisioncenter/client/src/pages/Home.tsx';
let s = fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
const start = s.indexOf('import ArrowDownRight');
const endMarker = 'import X from "lucide-react/dist/esm/icons/x.js";';
const end = s.indexOf(endMarker, start);
if (start >= 0 && end >= 0) {
  const replacement = `import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Crosshair,
  Gauge,
  Instagram,
  Menu,
  MessageCircle,
  MoveHorizontal,
  Sparkles,
  Star,
  Target,
  Truck,
  X,
} from "lucide-react";`;
  s = s.slice(0, start) + replacement + s.slice(end + endMarker.length);
}
fs.writeFileSync(p, s, 'utf8');
console.log('Home.tsx normalized');

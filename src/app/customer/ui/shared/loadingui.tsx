// app/loading.tsx
import { Loader2 } from "lucide-react";

export default function LoadingComponent() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
   
        <Loader2 className="h-10 w-10 animate-spin text-[var(--text-primary)]" />
    </div>
  );
}

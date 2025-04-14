import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-md mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-destructive" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-destructive">Error fetching weather data</h3>
          <div className="mt-2 text-sm text-destructive/90">
            <p>{message}</p>
          </div>
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onRetry}
              className="text-destructive hover:text-destructive/90 border-destructive/50 hover:border-destructive/70"
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  defaultLocation: string;
  onSearch: (location: string) => void;
  disabled?: boolean;
}

export default function SearchBar({ defaultLocation, onSearch, disabled }: SearchBarProps) {
  const [locationInput, setLocationInput] = useState(defaultLocation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(locationInput);
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-grow">
            <Label htmlFor="location" className="text-sm font-medium text-muted-foreground mb-1">
              Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                id="location"
                placeholder="Enter city name (e.g., London)"
                className="w-full pl-10"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="self-end">
            <Button 
              type="submit" 
              className="w-full sm:w-auto flex items-center gap-2 h-10"
              disabled={disabled}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

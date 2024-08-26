// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./dropdown-menu";

import { Button } from "./button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";

export function AccountMenu() {
  const { data: profile } = useQuery({
    queryKey: ['profie'],
    queryFn: getProfile,
  })

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getProfile,
  })


    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
            <Button 
            variant="outline" 
            className="flex items-center gap-2 select-none"
            >
                {managedRestaurant?.name}
                <ChevronDown className="h-4 w-4" />
            </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex flex-col">
                    <span>Raul Ferreira</span>
                    <span className="text-xs font-normal text-muted-foreground">raul@rocketseat.com.br</span>
                  </DropdownMenuLabel>
                 <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2"/>
                <span>Perfil da loja</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w-4 h-4 mr-2"/>
                <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
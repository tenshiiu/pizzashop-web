// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./dropdown-menu";

import { Button } from "./button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { Skeleton } from "./skeleton";

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profie'],
    queryFn: getProfile,
  })

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
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
               { isLoadingManagedRestaurant ? <Skeleton className="h-4 w-40"/> : managedRestaurant?.name}
                <ChevronDown className="h-4 w-4" />
            </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex flex-col">
                    {isLoadingProfile ? (
                      <div className="space-y-1.5">
                        <Skeleton className="h-4 w-32"/>
                        <Skeleton className="h-3 w-24"/>
                      </div>
                    ) : (
                      <>
                        <span>{profile?.name}</span>
                        <span className="text-sx font-normal text-muted-foreground">
                          {profile?.email}
                        </span>
                      </>
                    )}
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
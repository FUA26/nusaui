"use client"

import {
  Bell,
  CheckSquare,
  ChevronRight,
  FolderKanban,
  KeySquare,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Shield,
  UserCog,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  items?: {
    title: string
    url: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

const navItems: NavItem[] = [
  { title: "Dashboard", url: "/task", icon: LayoutDashboard },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Tickets", url: "/tickets", icon: LifeBuoy },
  { title: "Apps", url: "/apps", icon: FolderKanban },
  { title: "Access Requests", url: "/access-requests", icon: Bell },
  {
    title: "Manage",
    url: "/manage",
    icon: Users,
    items: [
      { title: "Users", url: "/manage/users", icon: UserCog },
      { title: "Roles", url: "/manage/roles", icon: Shield },
      { title: "Permissions", url: "/manage/permissions", icon: KeySquare },
    ],
  },
  { title: "Settings", url: "/settings", icon: Settings },
]

function matchesPath(currentPath: string, itemPath: string) {
  if (currentPath === itemPath) return true
  if (itemPath === "/") return false
  return currentPath.startsWith(`${itemPath}/`)
}

export function DashboardSidebar() {
  const currentPath = "/tasks"

  return (
    <div className="relative h-[620px] overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:!h-full">
      <SidebarProvider className="h-full !min-h-0">
        <Sidebar
          collapsible="icon"
          className="border-sidebar-border bg-sidebar text-sidebar-foreground border-r shadow-sm md:shadow-none"
        >
          <SidebarHeader className="border-sidebar-border bg-sidebar h-16 border-b px-3 group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="h-10">
                  <div className="bg-primary text-primary-foreground flex size-7 shrink-0 items-center justify-center rounded-md">
                    N
                  </div>
                  <div className="grid text-left text-sm leading-tight">
                    <span className="truncate font-semibold">NusaUI Admin</span>
                    <span className="text-muted-foreground truncate text-xs">
                      Backoffice
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent className="px-3 py-2 group-data-[collapsible=icon]:px-2">
            <SidebarGroup className="p-0">
              <SidebarGroupLabel className="text-muted-foreground text-xs font-medium group-data-[collapsible=icon]/sidebar-wrapper:hidden">
                Platform
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {navItems.map((item) => {
                    const hasSubItems = Boolean(item.items?.length)
                    const isItemActive =
                      matchesPath(currentPath, item.url) ||
                      item.items?.some((sub) =>
                        matchesPath(currentPath, sub.url)
                      )

                    if (!hasSubItems) {
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={isItemActive}
                            asChild
                            className="data-[active=true]:bg-sidebar-primary/90 data-[active=true]:text-sidebar-primary-foreground"
                          >
                            <a
                              href={item.url}
                              className={cn(
                                "flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                                isItemActive
                                  ? "bg-sidebar-primary/90 text-sidebar-primary-foreground"
                                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                              )}
                            >
                              <item.icon className="size-4 shrink-0" />
                              <span className="truncate">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    }

                    return (
                      <Collapsible
                        key={item.title}
                        className="group/collapsible"
                        defaultOpen={Boolean(isItemActive)}
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              tooltip={item.title}
                              isActive={Boolean(isItemActive)}
                              asChild
                            >
                              <button
                                type="button"
                                className={cn(
                                  "flex h-9 w-full cursor-pointer items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                                  isItemActive
                                    ? "bg-sidebar-primary/90 text-sidebar-primary-foreground"
                                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                                )}
                              >
                                <item.icon className="size-4 shrink-0" />
                                <span className="truncate">{item.title}</span>
                                <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                              </button>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-1">
                              {item.items?.map((subItem) => {
                                const isSubItemActive = matchesPath(
                                  currentPath,
                                  subItem.url
                                )
                                return (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={isSubItemActive}
                                      className="data-[active=true]:bg-sidebar-primary/15 data-[active=true]:text-sidebar-primary"
                                    >
                                      <a href={subItem.url}>
                                        {subItem.icon ? (
                                          <subItem.icon className="size-4 shrink-0" />
                                        ) : null}
                                        <span className="truncate">
                                          {subItem.title}
                                        </span>
                                      </a>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                )
                              })}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <main className="flex h-full flex-1 flex-col p-6">
            <div className="mb-4 flex items-center gap-2">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold">Tasks</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Layout sidebar dashboard yang diadaptasi dari halaman /tasks di
              repo Sonnar.
            </p>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

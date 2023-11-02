'use client'
import { usePathname} from 'next/navigation'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar;
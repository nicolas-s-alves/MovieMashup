import Home from '@/app/home'
import HomeLayout from './layouts/HomeLayout'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/common/resources/api';

export default function HomePage() {
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    )
}

HomePage.useLayout = HomeLayout;
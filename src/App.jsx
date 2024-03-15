import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {ROUTES.map((route, index) => {
                    const {
                        path,
                        protected: isProtected,
                        component: Component,
                        children,
                    } = route;

                    const routeComponent = (child, childIndex) => {
                        const { path: childPath, component: ChildComponent } =
                            child;

                        return (
                            <Route
                                key={childIndex}
                                path={path + childPath}
                                element={
                                    isProtected ? (
                                        <ProtectedRoute>
                                            {ChildComponent && (
                                                <ChildComponent />
                                            )}
                                        </ProtectedRoute>
                                    ) : (
                                        ChildComponent && <ChildComponent />
                                    )
                                }
                            />
                        );
                    };

                    return [
                        isProtected && (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <ProtectedRoute>
                                        {Component && <Component />}
                                    </ProtectedRoute>
                                }
                            />
                        ),

                        !isProtected && (
                            <Route
                                key={index}
                                path={path}
                                element={Component && <Component />}
                            />
                        ),
                        ...children.map((child, childIndex) =>
                            routeComponent(child, childIndex)
                        ),
                    ];
                })}
            </Routes>
        </Suspense>
    );
}

export default App;

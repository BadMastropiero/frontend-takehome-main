import { Card } from "@/components/ui/card";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-6xl font-bold">Dashboard</h1>
          </header>

          <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <h2 className="font-bold text-xl mb-2">Widget 1</h2>
              </Card>
              <Card className="p-4">
                <h2 className="font-bold text-xl mb-2">Widget 2</h2>
              </Card>
              <Card className="p-4">
                <h2 className="font-bold text-xl mb-2">Widget 3</h2>
              </Card>
            </div>
          </main>

          <div className="flex flex-col gap-4 px-6">
            <Card className="p-4">
              <h2 className="font-bold text-xl mb-2">Chart 1</h2>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

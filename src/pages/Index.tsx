import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const matchData = {
    league: "PLT Academy",
    date: "24 октября, 17:30",
    status: "Матч окончен",
    titan: {
      name: "Титан",
      score: 3,
      logo: "https://cdn.poehali.dev/projects/5450f25f-2180-431f-bfd1-7c52a58b4977/files/438b6bd5-9286-4485-b608-dc7490ede7a5.jpg",
      goals: [
        { player: "Комаров", time: "70'", type: "Пенальти" },
        { player: "Комаров", time: "73'", type: "Гол" },
        { player: "Комаров", time: "85'", type: "Гол" },
        { player: "Комаров", time: "90+3'", type: "Гол" },
      ],
      cards: [{ player: "Комаров", time: "?'", type: "yellow", reason: "Симуляция" }],
      lineup: [
        { number: 1, name: "Капустин", position: "GK" },
        { number: 17, name: "Корнемет", position: "DEF", captain: true },
        { number: 36, name: "Ромиделег", position: "DEF" },
        { number: 59, name: "Корнев", position: "DEF" },
        { number: 45, name: "Волков", position: "DEF" },
        { number: 25, name: "Комаров", position: "CDM" },
        { number: 10, name: "Лотос", position: "MID" },
        { number: 90, name: "Воронов", position: "MID" },
        { number: 23, name: "Лихачев", position: "MID" },
        { number: 65, name: "Жуков", position: "FWD" },
        { number: 7, name: "Ворон", position: "FWD" },
      ],
      shots: 27,
      shotsOnTarget: 15,
    },
    legion: {
      name: "Легион",
      score: 4,
      logo: "https://cdn.poehali.dev/projects/5450f25f-2180-431f-bfd1-7c52a58b4977/files/fd47778e-779e-4b82-b375-c28581e4443e.jpg",
      goals: [
        { player: "Соколов", time: "93+4'", type: "Гол" },
        { player: "Соколов", time: "90+5'", type: "Гол" },
        { player: "Соколов", time: "90+6'", type: "Гол" },
      ],
      cards: [],
      lineup: [
        { number: 1, name: "Морозов", position: "GK" },
        { number: 12, name: "Тигинр", position: "DEF" },
        { number: 67, name: "Лоров", position: "DEF" },
        { number: 41, name: "Кубков", position: "DEF" },
        { number: 6, name: "Жезлов", position: "DEF" },
        { number: 9, name: "Железов", position: "MID" },
        { number: 35, name: "Шаров", position: "MID" },
        { number: 25, name: "Иванов", position: "MID" },
        { number: 65, name: "Козлов", position: "MID" },
        { number: 78, name: "Петров", position: "FWD" },
        { number: 19, name: "Соколов", position: "FWD", captain: true },
      ],
      shots: 5,
      shotsOnTarget: 3,
    },
  };

  const totalShots = matchData.titan.shots + matchData.legion.shots;
  const titanShotsPercent = (matchData.titan.shots / totalShots) * 100;
  const legionShotsPercent = (matchData.legion.shots / totalShots) * 100;

  const totalShotsOnTarget = matchData.titan.shotsOnTarget + matchData.legion.shotsOnTarget;
  const titanOnTargetPercent = (matchData.titan.shotsOnTarget / totalShotsOnTarget) * 100;
  const legionOnTargetPercent = (matchData.legion.shotsOnTarget / totalShotsOnTarget) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2 animate-fade-in">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            {matchData.league}
          </Badge>
          <p className="text-muted-foreground text-sm">{matchData.date}</p>
          <Badge variant="destructive" className="text-xs">
            {matchData.status}
          </Badge>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 animate-scale-in">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
            <div className="text-center space-y-4">
              <img
                src={matchData.titan.logo}
                alt={matchData.titan.name}
                className="w-24 h-24 mx-auto object-contain hover-scale"
              />
              <h2 className="text-3xl font-black text-primary">{matchData.titan.name}</h2>
            </div>

            <div className="text-center px-8">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-black bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {matchData.titan.score}
                </span>
                <span className="text-4xl text-muted-foreground">:</span>
                <span className="text-6xl font-black bg-gradient-to-br from-accent via-secondary to-primary bg-clip-text text-transparent">
                  {matchData.legion.score}
                </span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <img
                src={matchData.legion.logo}
                alt={matchData.legion.name}
                className="w-24 h-24 mx-auto object-contain hover-scale"
              />
              <h2 className="text-3xl font-black text-accent">{matchData.legion.name}</h2>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 animate-fade-in">
            <div className="flex items-center gap-2">
              <Icon name="Target" className="text-primary" size={24} />
              <h3 className="text-xl font-bold">Голы {matchData.titan.name}</h3>
            </div>
            <div className="space-y-3">
              {matchData.titan.goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover-scale"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Goal" fallback="Circle" className="text-primary" size={20} />
                    <span className="font-semibold">{goal.player}</span>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="font-mono">
                      {goal.time}
                    </Badge>
                    {goal.type !== "Гол" && (
                      <p className="text-xs text-muted-foreground mt-1">{goal.type}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {matchData.titan.cards.length > 0 && (
              <div className="pt-3 border-t border-border">
                {matchData.titan.cards.map((card, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-5 bg-yellow-500 rounded-sm"></div>
                    <span>{card.player}</span>
                    <span className="text-muted-foreground">• {card.reason}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card className="p-6 space-y-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 animate-fade-in">
            <div className="flex items-center gap-2">
              <Icon name="Target" className="text-accent" size={24} />
              <h3 className="text-xl font-bold">Голы {matchData.legion.name}</h3>
            </div>
            <div className="space-y-3">
              {matchData.legion.goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover-scale"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Goal" fallback="Circle" className="text-accent" size={20} />
                    <span className="font-semibold">{goal.player}</span>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="font-mono">
                      {goal.time}
                    </Badge>
                    {goal.type !== "Гол" && (
                      <p className="text-xs text-muted-foreground mt-1">{goal.type}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 space-y-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <Icon name="BarChart3" className="text-secondary" size={24} />
            <h3 className="text-xl font-bold">Статистика</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Удары</span>
                <span className="text-sm text-muted-foreground">
                  {matchData.titan.shots} - {matchData.legion.shots}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Progress
                    value={titanShotsPercent}
                    className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary"
                  />
                </div>
                <div className="flex-1">
                  <Progress
                    value={legionShotsPercent}
                    className="h-3 rotate-180 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-destructive"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Удары в створ</span>
                <span className="text-sm text-muted-foreground">
                  {matchData.titan.shotsOnTarget} - {matchData.legion.shotsOnTarget}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Progress
                    value={titanOnTargetPercent}
                    className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary"
                  />
                </div>
                <div className="flex-1">
                  <Progress
                    value={legionOnTargetPercent}
                    className="h-3 rotate-180 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-destructive"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in">
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-primary" size={24} />
              <h3 className="text-xl font-bold">Стартовый состав {matchData.titan.name}</h3>
            </div>
            <div className="space-y-2">
              {matchData.titan.lineup.map((player, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Badge variant="outline" className="font-mono w-10 justify-center">
                    {player.number}
                  </Badge>
                  <span className="font-medium">{player.name}</span>
                  {player.captain && (
                    <Badge variant="secondary" className="text-xs">
                      К
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground ml-auto">{player.position}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in">
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-accent" size={24} />
              <h3 className="text-xl font-bold">Стартовый состав {matchData.legion.name}</h3>
            </div>
            <div className="space-y-2">
              {matchData.legion.lineup.map((player, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 hover:bg-accent/10 rounded-lg transition-colors"
                >
                  <Badge variant="outline" className="font-mono w-10 justify-center">
                    {player.number}
                  </Badge>
                  <span className="font-medium">{player.name}</span>
                  {player.captain && (
                    <Badge variant="secondary" className="text-xs">
                      К
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground ml-auto">{player.position}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-4 bg-muted/50 border-dashed animate-fade-in">
          <p className="text-center text-sm text-muted-foreground">
            ⚠️ Все данные в этом отчёте вымышлены и созданы в развлекательных целях
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;

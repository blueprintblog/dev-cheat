import CodeHighlighter from '../codeHighLighter';
import CopyButton from './CopyButton';
export default function CommandCard({
  title,
  level,
  sections,
  useCase,
  tip,
  language = 'bash',
  borderColor = '#3498db',
}) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'iniciante':
        return 'card-iniciante';
      case 'intermediario':
        return 'card-intermediario';
      case 'avancado':
        return 'card-avancado';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`${getLevelColor(level)} card`}>
      <div
        className={`
         text-white px-4 py-2 rounded-lg inline-block mb-4`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {useCase && (
        <div className="bg-[#1a1a2e] p-3 rounded-lg mb-4">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-blue-400">Use quando:</span>{' '}
            {useCase.replace('Use quando:', '')}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {Object.entries(sections).map(([sectionName, commands]) => (
          <div key={sectionName}>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              {sectionName}
            </h4>

            <div className="space-y-2">
              {commands.map((cmd, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-1 flex justify-between items-center command relative">
                    <div className="code-container">
                      <CodeHighlighter
                        code={cmd.command}
                        language={language}
                        borderColor={borderColor}
                      />
                      {cmd.comment && (
                        <p className="text-gray-200 text-sm mt-1 ml-3">
                          {cmd.comment}
                        </p>
                      )}
                    </div>
                    <CopyButton text={cmd.command} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {tip && (
        <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 p-3 mt-4 rounded">
          <p className="text-sm text-blue-300">{tip}</p>
        </div>
      )}
    </div>
  );
}

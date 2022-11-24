using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            // private readonly ILogger _logger;

            public Handler(DataContext context)
            {
                _context = context;
                // _logger = logger;
            }

            // //El cancellationToken se usa para cancelar una request una vez enviada, le ponemos un delay para poder probarlo
            // //ya que sino se hace muy rápido.
            // public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            // {

            //     try
            //     {
            //         for (var i = 0; i < 10; i++)
            //         {
            //             cancellationToken.ThrowIfCancellationRequested();
            //             await Task.Delay(1000, cancellationToken);
            //             _logger.LogInformation($"Task {i + 1} has completed");
            //         }
            //     }
            //     catch (Exception ex) when (ex is TaskCanceledException)
            //     {
            //         _logger.LogInformation("Task was cancelled");
            //     }

            //     return await _context.Activities.ToListAsync(cancellationToken);
            // }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}
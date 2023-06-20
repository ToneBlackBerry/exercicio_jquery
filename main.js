$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()

    const listaTarefas = $('#lista-tarefa').val()
    const novaTarefa = $('<ul style ="display: none"></ul>')

    $(`<li>${listaTarefas}</li>`).appendTo(novaTarefa)
    $(novaTarefa).appendTo('body')

    $(novaTarefa).fadeIn(750)

    $('li').click(function () {
      $(this).css('text-decoration', 'line-througH')
    })

    $('#lista-tarefa').val('')
  })
})

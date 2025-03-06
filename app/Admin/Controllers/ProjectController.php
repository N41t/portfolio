<?php

namespace App\Admin\Controllers;

use App\Models\Project;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ProjectController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Project controller';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    // Выводит список всех записей из таблицы Experience
    protected function grid()
    {
        $grid = new Grid(new Project());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('title', __('Название'))->sortable();
        $grid->column('description', __('Описание'))->sortable();
        $grid->column('link', __('Ссылка'))->sortable();
        $grid->column('image', __('Картинка'))->image('/storage/');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    // Отображает информацию из таблицы User по методу show()
    protected function detail($id)
    {
        $show = new Show(Project::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('title', __('Название'));
        $show->field('description', __('Описание'))->sortable();
        $show->field('link', __('Ссылка'))->sortable();
        $show->field('image', __('Картинка'))->image('/storage/');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */

    // Редактирование
    protected function form()
    {
        $form = new Form(new Project());

        $form->display('id', __('ID'));
        $form->text('title', __('Название'));
        $form->textarea('description', __('Описание'));
        $form->text('link', __('Ссылка'));
        $form->image('image', __('Картинка'));

        return $form;
    }
}

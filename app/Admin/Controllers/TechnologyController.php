<?php

namespace App\Admin\Controllers;

use App\Models\Technology;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class TechnologyController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Technology controller';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    // Выводит список всех записей из таблицы Experience
    protected function grid()
    {
        $grid = new Grid(new Technology());

        $grid->column('id', __('ID'))->sortable();
        $grid->column('title', __('Название'))->sortable();
        $grid->column('icon', __('Иконка'))->image('/storage/');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed   $id
     * @return Show
     */
    // Отображает информацию из таблицы User по методу show()
    protected function detail($id)
    {
        $show = new Show(Technology::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('title', __('Название'));
        $show->field('icon', __('Иконка'))->image('/storage/');

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
        $form = new Form(new Technology());

        $form->display('id', __('ID'));
        $form->text('title', __('Название'));
        $form->image('icon', __('Иконка'));

        return $form;
    }
}
